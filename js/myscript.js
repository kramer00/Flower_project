var images = ["images/emotion1.png", "images/just-because1.png", "images/event1.png"];

// Array that holds images
var current_image_index = 0;
var slider_container;
var dots_container;

function prev_image_index() {
    if (current_image_index < images.length - 1) {
        return current_image_index + 1;
    } else {
        return 0;
    }
}

function next_image_index() {
    if (current_image_index > 0) {
        return current_image_index - 1;
    } else {
        return images.length - 1;
    }
}

$(function() {
    slider_container = $('#slider-container');
    dots_container = $('#slider-dots-container');

    for (var i = 0; i < images.length; i++) {
        var row = images[i];
        var class_name = 'slider-img slider-off';
        var dot_class_name = '';

        if (i == 0) {
            class_name = 'slider-img';
            dot_class_name = 'dot-current';
        }
        var img = $('<img>').attr('src', row).addClass(class_name);

        slider_container.append(img);

        var dot = $('<div>').addClass('dot fa fa-circle').addClass(dot_class_name)
        dots_container.append(dot);
    };

    $('#prev').click(function() {
        var prev_index = prev_image_index();
        var current_image = $(slider_container.find('img.slider-img')[current_image_index]);
        var prev_image = $(slider_container.find('img.slider-img')[prev_index]);

        var current_dot = $(dots_container.find('div.dot')[current_image_index]);
        var prev_dot = $(dots_container.find('div.dot')[prev_index]);

        current_image.animate({
            left : "-=995"
        }, 1000, function() {// This function gets called at the end of the animation
            current_image.addClass('slider-off').removeClass('current').attr('style', '');
            current_dot.removeClass('dot-current');
        });
        prev_image.addClass('slider-off');
        prev_image.animate({
            left : "0"
        }, 1000, function() {
            prev_image.removeClass('slider-off').removeClass('current').attr('stlyle', '');
            prev_dot.addClass('dot-current');
        });
        current_image_index++;
        if (current_image_index == images.length) {
            current_image_index = 0;
        }
    });

    $('#next').click(function() {
        var next_index = next_image_index();
        var current_image = $(slider_container.find('img.slider-img')[current_image_index]);
        var next_image = $(slider_container.find('img.slider-img')[next_index]);

        var current_dot = $(dots_container.find('div.dot')[current_image_index]);
        var next_dot = $(dots_container.find('div.dot')[next_index]);

        current_image.animate({
            left : "995"
        }, 1000, function() {// This function gets called at the end of the animation
            current_image.addClass('slider-off').removeClass('current').attr('style', '');
            current_dot.removeClass('dot-current');
        });
        next_image.addClass('slider-back');
        next_image.animate({
            left : "0"
        }, 1000, function() {
            next_image.removeClass('slider-off').removeClass('slider-back').removeClass('current').attr('stlyle', '');
            next_dot.addClass('dot-current');
        });
        current_image_index--;
        if (current_image_index == -1) {
            current_image_index = images.length - 1;
        }
    });
});
