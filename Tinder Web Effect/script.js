// get Data
let users = [
  {
    profilePic:
      "https://yt3.googleusercontent.com/RwBINtPFhiFHiBb0EmrNGu4ij6wkLQvC-0whKzAEq9v3oGdDJw3_-GaF1C_oM7hdSS9SJmaBlw=s900-c-k-c0x00ffffff-no-rj",
    displayPic:
      "https://esportsindex.in/wp-content/uploads/2002/09/FXT42699.jpg",
    pendingMessage: 9,
    location: "Kandivali, India",
    name: "Anurag",
    age: 19,
    interest: [
      {
        iconInt: '<i class="ri-music-2-fill"></i>',
        nameInt: "Music",
      },
      {
        iconInt: '<i class="ri-gamepad-line"></i>',
        nameInt: "Gamming",
      },
    ],
    bio: "Anurag is a OPKing he is always playing a BGMI game such as Bettel Ground Mobile India this game is too good and intesting for Pro Playes also intresing for Noob player such as Kalmaster.",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 7,
    location: "Nallasopara, India",
    name: "Sunil",
    age: 24,
    interest: [
      {
        iconInt: '<i class="ri-music-2-fill"></i>',
        nameInt: "Music",
      },
      {
        iconInt: '<i class="ri-code-s-slash-fill"></i>',
        nameInt: "Coding",
      },
    ],
    bio: "Sunil is a MRDracula he is always playing a BGMI game such as Bettel Ground Mobile India this game is too good and intesting for Pro Playes also intresing for Noob player such as Kalmaster.",
    isFriend: null,
  },
  {
    profilePic:
      "https://media.istockphoto.com/id/1440266450/photo/of-male-thinking-about-something-on-a-black-background.jpg?s=1024x1024&w=is&k=20&c=0J4wAH0MQrZyU2htatsLcCioAzmkYGCy09uKlkRWI-w=",
    displayPic:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 2,
    location: "Kandivali, India",
    name: "Vivek",
    age: 22,
    interest: [
      {
        iconInt: '<i class="ri-gamepad-line"></i>',
        nameInt: "Gamming",
      },
      {
        iconInt: '<i class="ri-paint-brush-line"></i>',
        nameInt: "Painting",
      },
    ],
    bio: "Vivek is a TMKing he is always playing a BGMI game such as Bettel Ground Mobile India this game is too good and intesting for Pro Playes also intresing for Noob player such as Kalmaster.",
    isFriend: null,
  },
  {
    profilePic:
      "https://media.istockphoto.com/id/1214750267/photo/black-and-white-portrait-of-serious-man-with-beard-looking-at-the-camera.jpg?s=1024x1024&w=is&k=20&c=ruTFaD2rHvHDQB8jLLwHM4CG5KdM6A2QcPUBDDVjBI0=",
    displayPic:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 6,
    location: "Belgam, India",
    name: "Uttam",
    age: 26,
    interest: [
      {
        iconInt: '<i class="ri-gamepad-line"></i>',
        nameInt: "Gamming",
      },
      {
        iconInt: '<i class="ri-service-line"></i>',
        nameInt: "surgeon",
      },
    ],
    bio: "Uttam is a Kaalmaster he is always playing a BGMI game such as Bettel Ground Mobile India this game is too good and intesting for Pro Playes also intresing for Noob player such as Kalmaster.",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 4,
    location: "Naigaon, India",
    name: "Rashika",
    age: 21,
    interest: [
      {
        iconInt: '<i class="ri-gamepad-line"></i>',
        nameInt: "Gamming",
      },
      {
        iconInt: '<i class="ri-service-line"></i>',
        nameInt: "surgeon",
      },
    ],
    bio: "Rashika is a RashikaNoob he is always playing a BGMI game such as Bettel Ground Mobile India this game is too good and intesting for Pro Playes also intresing for Noob player such as Kalmaster.",
    isFriend: null,
  },
];

let curr = 0;
let isAminating = false;
let iscontentAminating = false;

function select(elem) {
  return document.querySelector(elem);
}

function setData(index) {
  select(".prflimg img").src = users[index].profilePic;
  select(".badge h5").textContent = users[index].pendingMessage;
  select(".location h3").textContent = users[index].location;
  select(".nameage h1").textContent = users[index].name;
  select(".nameage h2").textContent = users[index].age;

  let clutter = "";
  users[index].interest.forEach(function (interest) {
    clutter += `<div class="tag flex items-center justify-between gap-3 bg-white/20 py-1 px-3 rounded-full">
        ${interest.iconInt}
        <h3 class="interest capitalize text-sm tracking-tighter">${interest.nameInt}</h3>
    </div>`;
  });
  select(".tags").innerHTML = clutter;

  select(".bio p").textContent = users[index].bio;
}

(function setInitial() {
  select(".maincard img").src = users[curr].displayPic;
  select(".incommingcard img").src = users[curr + 1]?.displayPic;
  setData(curr);
  curr = 2;
})();

function imageChange() {
  if (!isAminating) {
    isAminating = true;
    let tl = gsap.timeline({
      onComplete: function () {
        isAminating = false;

        let main = select(".maincard");
        let incomming = select(".incommingcard");

        incomming.classList.remove("z-[2]");
        incomming.classList.add("z-[3]");

        main.classList.remove("z-[3]");
        main.classList.add("z-[2]");

        gsap.set(main, {
          scale: 1,
          opacity: 1,
        });

        if (curr === users.length) curr = 0;
        select(".maincard img").src = users[curr].displayPic;
        curr++;
        incomming.classList.remove("incommingcard");
        main.classList.remove("maincard");

        incomming.classList.add("maincard");
        main.classList.add("incommingcard");
      },
    });

    tl.to(
      ".maincard",
      {
        scale: 1.1,
        opacity: 0,
        ease: Circ,
        duration: 0.9,
      },
      "start"
    ).from(
      ".incommingcard",
      {
        scale: 0.9,
        opacity: 0,
        ease: Circ,
        duration: 1.1,
      },
      "start"
    );
  }
}

let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", function () {
  if (!iscontentAminating) {
    iscontentAminating = true;
    imageChange();
    setData(curr - 1);
    let tl1 = gsap.timeline({
      onComplete: function () {
        iscontentAminating = false;
        let elm = document.querySelectorAll(".element");
        gsap.set(elm, {
          y: "0%",
          opacity: 1,
        });
      },
    });
    tl1.from(".details .element", {
      y: "100%",
      opacity: 0,
      stagger: 0.06,
      ease: Power4.easeInOut,
      duration: 1.5,
    });
  }
});
accept.addEventListener("click", function () {
  if (!iscontentAminating) {
    iscontentAminating = true;
    imageChange();
    setData(curr - 1);
    let tl1 = gsap.timeline({
      onComplete: function () {
        iscontentAminating = false;
        let elm = document.querySelectorAll(".element");
        gsap.set(elm, {
          y: "0%",
          opacity: 1,
        });
      },
    });
    tl1.from(".details .element", {
      y: "100%",
      opacity: 0,
      stagger: 0.06,
      ease: Power4.easeInOut,
      duration: 1.5,
    });
  }
});

(function containerCreater() {
  document.querySelectorAll(".element").forEach(function (element) {
    let div = document.createElement("div");
    div.classList.add(`${element.classList[1]}container`, "overflow-hidden");
    div.appendChild(element);
    select(".details").appendChild(div);
    select(".btn").classList.remove("element");
  });
})();
