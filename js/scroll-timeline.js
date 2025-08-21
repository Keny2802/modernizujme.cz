import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

const scrollTimelineTracker = document.querySelector(".scroll-timeline-tracker");
const animatedImage = document.querySelector(".about-image");

const scrollTrackingTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block",
    scrollOffsets: [CSS.percent(0), CSS.percent(100)]
});

// const animatedImageTimeline = new ScrollTimeline({
//     scrollOffsets: [
//         {
//             target: animatedImage,
//             edge: "end",
//             treshold: "1"
//         },
//         {
//             target: animatedImage,
//             edge: "start",
//             treshold: "1"
//         }
//     ]
// });

scrollTimelineTracker.animate(
    {
        transform: ["scaleX(0)", "scaleX(1)"]
    },
    {
        duration: 1,
        timeline: scrollTrackingTimeline
    }
);

// animatedImage.animate(
//     {
//         transform: ["rotateX(90deg)", "rotate(0)"]
//     },
//     {
//         duration: 1,
//         timeline: animatedImageTimeline,

//     }
// );