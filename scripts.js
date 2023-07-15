var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

var lines = document.querySelectorAll('span[data-type="narration"]');

// Update the progress bar as the video plays
video1.addEventListener('timeupdate', function () {
    var now = video1.currentTime;

    // highlight text as video plays
    for (var i = 0, l = lines.length; i < l; i++) {
        var start = lines[i].getAttribute("data-start");
        var end = lines[i].getAttribute("data-end");
        var dataSection = lines[i].getAttribute("data-section");

        if (now >= start &&
            now <= end) {
            lines[i].className = "current";

            var section = document.getElementById(dataSection);

            if (!isInViewport(section) || section.offsetTop != 1200) {
                console.debug(section.id);
                //console.debug(section.offsetTop);

                // section.scrollIntoView();

                // section.scrollTo({
                //     top: 1200,
                //     behavior: "smooth",
                // });

                //location.href = "#" + dataSection;
                //console.debug(section.offsetTop);
            }
        } else {
            lines[i].className = "";
        }
    }
});

function setVideoSize(size) {
    const videoElements = document.getElementsByClassName('player-size');
    const videoContainer = document.querySelector('.stay-at-top');
    videoContainer.classList.remove('hide', 'small', 'medium');
    videoContainer.classList.add(size);
    video.style.width = '100%';
    video.style.height = 'auto';
}