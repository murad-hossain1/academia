// counter start 
const counts = document.querySelectorAll('.count')
const speed = 97

counts.forEach((counter) => {
    function upDate(){
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed        
        if(count < target){
            counter.innerText = Math.floor(inc + count) 
            setTimeout(upDate, 15)
        }else{
            counter.innerText = target
        }
    }
    upDate()
})
// counter end 

// slider start 

var slider = tns({
    container: '.carousel-slider',
    items: 3,
    autoplay: true,
    autoplayButtonOutput: false,
    autoHeight: true,
    mouseDrag: true,
    responsive: {
        640: {
            items: 1,
        },
        700: {
            items: 2,
        },
        900: {
            items: 3,
        },
    },
    controls: true,
    controlsPosition: "bottom",
    controlsText:  ["prev", "next"],
    controlsContainer: "#controls",
    prevButton: ".prev",
    nextButton: ".next",
 });

    var slider = tns({
        container: '.carousels-slider',
        items: 3,
        autoplay: true,
        autoplayButtonOutput: false,
        autoHeight: true,
        mouseDrag: true,
        responsive: {
            640: {
                items: 1,
            },
            700: {
                items: 2,
            },
            900: {
                items: 3,
            },
        },
        controls: true,
        controlsPosition: "bottom",
        controlsText:  ["prev", "next"],
        controlsContainer: "#controls",
        prevButton: ".prev",
        nextButton: ".next",
        });
// slider end 
