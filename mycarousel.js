
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    center: true,
    autoWidth: true,
    nav: true,
    loop: true,
    margin: 20,

  });
});

const data = [
  {
    "name": "Lorenzo",
    "pic": "https://image.ibb.co/grY9Y7/lorenzo.jpg",
    "pos": "Super Affiliate & CEO",
    "desc": "Affjobs is the only platform we use to hire talent. You don't get this much exposure to quality candidates anywhere else."
  },
  {
    "name": "Peter",
    "pic": "https://image.ibb.co/eCeGD7/peter.jpg",
    "pos": "Affiliate Marketer",
    "desc": "I was struggling to find a world class media buyer for my team. With Affjobs, I soon had 20+ talented applicants!"
  },
  {
    "name": "Tom",
    "pic": "https://image.ibb.co/mpEGD7/tom.jpg",
    "pos": "Super Affiliate & Entrepreneur",
    "desc": "All the industry job boards are painful and suck. This is the solution!"
  },
  {
    "name": "James",
    "pic": "https://image.ibb.co/bDQpY7/james.jpg",
    "pos": "Affiliate Network",
    "desc": "$299 to find my new Affiliate Manager? One of the best investments my business has made."
  },
  {
    "name": "Mirella",
    "pic": "https://image.ibb.co/gdjSLn/mirella.jpg",
    "pos": "Founder & Performance Marketer",
    "desc": "If you’re serious about your business. You should be hiring here. My team doubled in size with the help of Affjobs. Too easy."
  },
]
$.each(data, function (i, item) {
  $('.testimonials-section .owl-carousel').append(
    '<div class="carousel-item">' +
    '<div class="img-people">' +
    '<img src="' + data[i].pic + '" alt="">' +
    '</div>' +
    '<div class="info">' +
    '<h2>' + data[i].name + '' +
    '<br>' +
    '<span>' + data[i].pos + '</span>' +
    '</h2>' +
    '<p>' + data[i].desc + '</p>' +
    '</div>' +
    '</div>'
  )
})
