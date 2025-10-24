// Mark Zuckerberg Story - Meta Route

// Character sprites for Mark Zuckerberg
export const sprites = {
    neutral: "/Characters/MarkZuckeberg/MarkZuck.png",
    affectionate: "/Characters/MarkZuckeberg/MarkZuckDreamy.png",
    angry: "/Characters/MarkZuckeberg/MarkAngry.png",
    annoyed: "/Characters/MarkZuckeberg/MarkAngry.png",
    blush: "/Characters/MarkZuckeberg/MarkZuckBlushed.png",
    confused: "/Characters/MarkZuckeberg/MarkZuckConfused.png",
    flustered: "/Characters/MarkZuckeberg/MarkZuckFlustered.png",
    laugh: "/Characters/MarkZuckeberg/MarkZuckLaughing.png",
    nervous: "/Characters/MarkZuckeberg/MarkZuckFlustered.png",
    pained: "/Characters/MarkZuckeberg/MarkZuckSad.png",
    sad: "/Characters/MarkZuckeberg/MarkZuckSad.png",
    surprised: "/Characters/MarkZuckeberg/MarkZuckConfused.png"
};

// Mark Zuckerberg Story Array
export const markZuckerbergStory = [
    // Scene 0: Story in development
    {
        background: "facebook",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "Hey there! Thanks for choosing my route. I'm Mark Zuckerberg, and... well, my story is currently in development. The team is working hard to create something special!",
        choices: null,
        nextScene: 1
    },
    // Scene 1: Coming soon
    {
        background: "facebook",
        character: "neutral",
        speaker: "Mark Zuckerberg",
        text: "In the meantime, why don't you check out Jensen Huang's route or Mark Cuban's Shark Tank adventure? They're both pretty amazing experiences!",
        choices: null,
        nextScene: 'ending_zuck_dev'
    }
];

// Mark Zuckerberg Ending
export const endings = {
    ending_zuck_dev: {
        title: "🚧 Story In Development 🚧",
        description: "Mark Zuckerberg's story is currently being crafted! The team is working hard to bring you an amazing experience at Facebook HQ. In the meantime, check out the other amazing routes - Jensen Huang's NVIDIA romance or Mark Cuban's Shark Tank adventure. Each offers a unique and thrilling journey! Come back soon to see what adventures await with the Meta CEO!",
        image: "Characters/MarkZuckeberg/MarkZuck.png",
        background: "facebook"
    }
};

