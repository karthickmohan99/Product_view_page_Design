

//   function change_image(image){

//     var container = document.getElementById("main-image");
//     container.src = image.src;

// }


// document.addEventListener( 'DOMContentLoaded', function () {

//     let main = new Splide( '#main-slider', {
//         fixedWidth:400 ,
//         // fixedHeight: 410,
//         type      : 'fade',
//         rewind    : true,
//         pagination: false,
//         arrows    : false,
//       } );

//     let thumbnails=  new Splide( '#thumbnail-slider', {
//           fixedWidth: 80,
//           fixedHeight: 60,
//           gap       : 10,
//           rewind    : false,
//           pagination: false,
//           focus      : 'center',
//           cover      : true,
//           focus      : 'center',
//           isNavigation: true,
//           arrows    : true,
//           dragMinThreshold: 0,
//            dragMinThreshold: {
//               mouse: 0,
//               touch: 0,
//             },

//           breakpoints: {
//             600: {
//               fixedWidth : 60,
//               fixedHeight: 44,
//             },
//           },

//     } );

//     main.sync(thumbnails);
//     main.mount();
//     thumbnails.mount();

//   } );


document.addEventListener('DOMContentLoaded', function () {
  var main = new Splide('#main-slider', {
    type: 'fade',
    rewind: true,
    pagination: false,
    arrows: false,
    breakpoints: {
      600: {
        // fixedWidth : 350,
        // fixedHeight: 44,
      },
    },


  });


  var thumbnails = new Splide('#thumbnail-slider', {
    fixedWidth: 80,
    fixedHeight: 80,
    gap: 10,
    rewind: true,
    pagination: false,
    drag: false,
    arrows: true,
    focus: 'false',
    isNavigation: true,
    // dragMinThreshold: {
    //   mouse: 0,
    //   touch: 1,
    // },


    breakpoints: {
      600: {
        fixedWidth: 65,
        fixedHeight: 65,
      },
      700: {
        fixedWidth: 60,
        fixedHeight: 44,
      },
    },
  });


  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
});


const ratingContainer1 = document.getElementById('rating1');
const ratingContainer2 = document.getElementById('rating2');
const ratingHistory = document.getElementById('rating3');
const ratingHistory2 = document.getElementById('rating4');
const ratingHistory3 = document.getElementById('rating5');
const ratingHistory5 = document.getElementById('rating6');
const ratingHistory6 = document.getElementById('rating7');
const ratingContainer8 = document.getElementById('rating8');
const ratingContainer9 = document.getElementById('rating9');

console.log(ratingContainer8, "ratingContainer8");


function starRatings(ratingContainer) {
  const ratingValue = ratingContainer.getAttribute("data-rating");
  const stars = ratingContainer.querySelectorAll('.star');
  console.log(stars, "starssss");


  stars.forEach((star, index) => {
    console.log(index, "----", ratingValue);
    if (index < ratingValue) {
      star.querySelector("i").style.color = "#339999";
    } else {
      star.querySelector("i").style.color = "#808080";
    }
  })

}

function starRatingsHistory(ratingContainer) {
  const ratingValue = ratingContainer.getAttribute("data-rating");
  const stars = ratingContainer.querySelectorAll('.star');
  console.log(stars, "starssss");


  stars.forEach((star, index) => {

    console.log(index, "----", ratingValue);
    if (index < ratingValue) {
      star.classList.add('filled');
      star.classList.remove('bordered');
    } else {
      star.classList.add('bordered');
      star.classList.remove('filled');
    }
  })

}

starRatings(ratingContainer1);
starRatings(ratingContainer2);
starRatings(ratingContainer8);
starRatings(ratingContainer9);
starRatingsHistory(ratingHistory);
starRatingsHistory(ratingHistory2);
starRatingsHistory(ratingHistory3);
starRatingsHistory(ratingHistory5);
starRatingsHistory(ratingHistory6);



// star rating selection
let rating = "";
function starmark(item) {
  const count = item.id[0];
  console.log(count, "ccccc");
  rating = count;
  const subId = item.id.substring(1);
  console.log(subId, "subbb")
  for (let i = 0; i < 5; i++) {
    if (i < count) {
      console.log(i + 1, "nummmm");
      const span = document.getElementById((i + 1) + subId);

      span.classList.add('checked');
      span.classList.remove('bordered');
    } else {
      const span = document.getElementById((i + 1) + subId);
      span.classList.add('bordered');
      span.classList.remove('checked');
    }
  }
}

// file upload
// function upload(){
//   const fileUploadInput = document.querySelector('.file-uploader');
//    const image = fileUploadInput.files[0];
//   // const images = Array.from(fileUploadInput.files);

//   // console.log( images.type.includes('image'),"imageee");

//   if (!fileUploadInput || fileUploadInput.files.length === 0) {
//     return alert('No file selected!');
//   }
//  console.log(image,"legnthh")

//   if(image.length>5){
//     return alert('You can upload a maximum of five image!');
//   }

//   if(!image.type.includes('image')){
//     return alert('Only image are allowed!');
//   }


//   console.log(image,"imageee size");

//   if (image.size > 10_000_000) {
//     return alert('Maximum upload size is 10MB!');
//   }

//   const fileReader = new FileReader();
//   fileReader.readAsDataURL(image);

//   fileReader.onload=(fileReaderEvent)=>{
//     console.log(fileReaderEvent.target.result,"onload");
//      const uploaded_image = document.querySelector('.upload-img');
//      const preview_image = document.querySelector('.image-preveiw');
//      preview_image.style.display='inline-block';
//      uploaded_image.style.backgroundImage = `url("${fileReaderEvent.target.result}")`;




//   }

// }

function upload() {
  const fileUploadInput = document.querySelector('.file-uploader');

  if (!fileUploadInput || fileUploadInput.files.length === 0) {
    return alert('No file selected!');
  }

  const images = Array.from(fileUploadInput.files);
  console.log(images, "imagesss")
  if (images.length > 5) {
    return alert('You can upload a maximum of five images!');
  }

  for (const image of images) {
    if (!image.type.includes('image')) {
      return alert('Only images are allowed!');
    }
    if (image.size > 10_000_000) {
      return alert('Maximum upload size is 10MB!');
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(image);

    fileReader.onload = (fileReaderEvent) => {
      const uploadedImage = document.querySelector('.upload-img');
      const previewImage = document.querySelector('.image-preveiw');

      if (!uploadedImage || !previewImage) {
        return;
      }

      previewImage.style.display = 'inline-block';
      uploadedImage.style.backgroundImage = `url("${fileReaderEvent.target.result}")`;
    };
  }
}




// delete funnctionality
const deleteIcon = document.querySelector('.trash');

if (deleteIcon) {
  deleteIcon.addEventListener("click", function (e) {
    e.preventDefault();
    const previewImage = document.querySelector('.image-preveiw');
    const uploadedImage = document.querySelector('.upload-img');

    if (previewImage && uploadedImage) {
      previewImage.style.display = 'none';
      uploadedImage.style.backgroundImage = `url("")`;
    }
  });
}


// cancel and review button

const reviewButton = document.querySelector(".review-action a");
const collapsibleForm = document.getElementById("collapsible-form");


collapsibleForm.addEventListener('show.bs.collapse', () => {
  reviewButton.textContent = "Cancel";
})

collapsibleForm.addEventListener('hide.bs.collapse', () => {
  reviewButton.textContent = "Write a review";
})



// modal preview_img
const modal = document.getElementById('myModal');
const preview_imges = document.querySelectorAll('.preview-img');

const modalImg = document.getElementById('img01');

preview_imges.forEach(img => {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  })

})


const closeIcon = document.querySelector(".close");
closeIcon.addEventListener("click", function () {
  modal.style.display = "none";
})



document.querySelectorAll('.inc').forEach(button => {
  button.addEventListener('click', increment);
});

document.querySelectorAll('.dec').forEach(button => {
  button.addEventListener('click', decrement);
});



function increment(e) {
  console.log("Button clicked")
  e.preventDefault();
  var btnClicked = e.target;
  var input = btnClicked.parentElement.children[1];
  var inputValue = input.value;
  var newValue = parseInt(inputValue) + 1;
  input.value = newValue;
}


function decrement(e) {
  e.preventDefault();
  var btnClicked = e.target;
  var input = btnClicked.parentElement.children[1];
  var inputValue = input.value;
  var newValue = parseInt(inputValue) - 1;
  if (inputValue == 1) {
    input.value = 1;
  }
  else {
    input.value = newValue;
  }
}



