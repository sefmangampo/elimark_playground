const slideData = [
  {
    id: "bored",
    className: "slide",
    positionX: -1000,
    positionY: -1500,
    // positionZ: 0,
    // scale: 4,
    // rotationX: 90,
    // rotationY: 20,
    // rotationZ: 20,
    content: () =>
      `<q>Aren’t you just <b>bored</b> with all those slides-based presentations?</q>`,
  },
  {
    className: "slide",
    positionX: 0,
    positionY: -1500,
    content: () => `
      <q>
        Don’t you think that presentations given
        <strong>in modern browsers</strong> shouldn’t
        <strong>copy the limits</strong> of ‘classic’ slide decks?
      </q>`,
  },
  {
    className: "slide",
    positionX: 1000,
    positionY: -1500,
    content: () => `
        <q>
          Would you like to <strong>impress your audience</strong> with
          <strong>stunning visualization</strong> of your talk?
        </q>
        `,
  },
  {
    id: "title",
    positionX: 0,
    positionY: 0,
    scale: 4,
    content: () => `
        <span class="try">then you should try</span>
        <h1>impress.js<sup>*</sup></h1>
        <span class="footnote"><sup>*</sup> no rhyme intended</span>
        `,
  },
  {
    id: "its",
    positionX: 850,
    positionY: 3000,
    scale: 5,
    rotationZ: 90,
    content: () => `
        <p>
          It’s a <strong>presentation tool</strong> <br />
          inspired by the idea behind <a href="http://prezi.com">prezi.com</a>
          <br />
          and based on the
          <strong>power of CSS3 transforms and transitions</strong> in modern
          browsers.
        </p>
        `,
  },
  {
    id: "big",
    positionX: 3500,
    positionY: 2100,
    scale: 6,
    rotationZ: 180,
    content: () =>
      `<p>visualize your <b>big</b> <span class="thoughts">thoughts</span></p>`,
  },
  {
    id: "tiny",
    positionX: 2825,
    positionY: 2325,
    positionZ: -3000,
    scale: 1,
    rotationZ: 300,
    content: () => `<p>and <b>tiny</b> ideas</p>`,
  },
  {
    id: "ing",
    positionX: 3500,
    positionY: -850,
    positionZ: 0,
    scale: 6,
    rotationZ: 270,
    content: () => `
        <p>
          by <b class="positioning">positioning</b>,
          <b class="rotating">rotating</b> and
          <b class="scaling">scaling</b> them on an infinite canvas
        </p>
        `,
  },
  {
    id: "imagination",
    positionX: 6700,
    positionY: -300,
    positionZ: 0,
    scale: 6,
    content: () =>
      `<p>the only <b>limit</b> is your <b class="imagination">imagination</b></p>`,
  },
  {
    id: "source",
    positionX: 6300,
    positionY: 2000,
    positionZ: 0,
    scale: 4,
    rotationZ: 20,
    content: () => `
        <p>want to know more?</p>
        <q><a href="http://github.com/impress/impress.js">use the source</a>, Luke!</q>
        `,
  },
  {
    id: "one-more-thing",
    positionX: 6000,
    positionY: 4000,
    positionZ: 0,
    scale: 2,
    content: () => `<p>one more thing...</p>`,
  },
  {
    id: "its-in-3d",
    positionX: 6200,
    positionY: 4300,
    positionZ: -100,
    rotationX: 40,
    rotationY: 10,
    scale: 2,
    content: () => `
        <p>
          <span class="have">have</span> <span class="you">you</span>
          <span class="noticed">noticed</span> <span class="its">it’s</span>
          <span class="in">in</span> <b>3D<sup>*</sup></b>?
        </p>
        <span class="footnote">* beat that, prezi ;)</span>
        `,
  },
];

const attachSlides = () => {
  const impressDiv = document.getElementById("impress");

  slideData.forEach((slide) => {
    const {
      id,
      className,
      positionX,
      positionY,
      positionZ,
      scale,
      rotationX,
      rotationY,
      rotationZ,
      content,
    } = slide;

    const div = document.createElement("div");
    
    if (id) {
      div.id = id;
    }
    
    div.classList.add("step");

    if (className) {
      div.classList.add(...className.split(" "));
    }

    if (positionX !== undefined) {
      div.setAttribute("data-x", positionX);
    }

    if (positionY !== undefined) {
      div.setAttribute("data-y", positionY);
    }

    if (positionZ !== undefined) {
      div.setAttribute("data-z", positionZ);
    }

    if (scale !== undefined) {
      div.setAttribute("data-scale", scale);
    }

    if (rotationX !== undefined) {
      div.setAttribute("data-rotate-x", rotationX);
    }

    if (rotationY !== undefined) {
      div.setAttribute("data-rotate-y", rotationY);
    }

    if (rotationZ !== undefined) {
      div.setAttribute("data-rotate-z", rotationZ);
    }

    div.innerHTML = content();
    impressDiv.appendChild(div);
  });

  const overviewDiv = document.createElement("div");
  overviewDiv.id = "overview";
  overviewDiv.classList.add("step");
  overviewDiv.setAttribute("data-x", 3000);
  overviewDiv.setAttribute("data-y", 1500);
  overviewDiv.setAttribute("data-z", 0);
  overviewDiv.setAttribute("data-scale", 10);

  impressDiv.appendChild(overviewDiv);
};

attachSlides();
