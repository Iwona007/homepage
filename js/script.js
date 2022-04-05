{
    const onRemoveImageButtonClick = () => {
        const imageAction = document.querySelector(".body__imageStyle");
        const buttonRemove = document.querySelector(".section__button--remove");
        buttonRemove.addEventListener("click", () => {
            imageAction.remove();
        });
    }
    onRemoveImageButtonClick();

    const onChangeBackgroundClick = () => {
        const colorUpdated = document.querySelector(".section--colorUpdated");
        const colorName = document.querySelector(".js-colorName");
        const changeColor = document.querySelector(".js-changeColor");
        changeColor.addEventListener("click", (e) => {
            colorUpdated.classList.toggle("section--newColor");
            colorUpdated.classList.contains("section--newColor")
                ? (colorName.innerHTML = "Light")
                : (colorName.innerHTML = "Dark");
        })
    };

    onChangeBackgroundClick();

    const hideImageButtton = document.querySelector(".js-hideImage");
    const image = document.querySelector(".js-image")

    const hideImage = () => {
        image.classList.toggle("body__imageStyleHiden")
        hideImageButtton.innerText = image.classList.contains("body__imageStyleHiden")
            ? "Show image"
            : "Hide image";
    }

    const onHideImageButttonClick = () => {
        hideImageButtton.addEventListener("click", hideImage)
    }

    onHideImageButttonClick();

    const orginalImageButtton = document.querySelector(".js-orginalImage");
    const orginalImageSize = () => {
        image.classList.toggle("body__imageStyle")
        orginalImageButtton.innerText = image.classList.contains("body__imageStyle")
            ? "Orginal image size"
            : "Rounded image size";
    }

    let onOrginal = () => {
        orginalImageButtton.addEventListener("click", orginalImageSize)
    }
    onOrginal();

    const onShowTextOnClick = () => {
        const section = document.querySelector(".section");
        const changeText = document.querySelector(".js-changeText");
        const textContain = document.querySelector(".js-textContain");
        changeText.addEventListener("click", (e) => {
            section.classList.toggle("js-newText");
            section.classList.contains("js-newText")
                ? (textContain.innerHTML = "fitness")
                : (textContain.innerHTML = "click");
        });
    }

    onShowTextOnClick();

    const onAddTextClick = () => {
        const showTextButton2 = document.querySelector(".js-textShow2");
        showTextButton2.addEventListener("click", (e) => {
            showTextButton2.innerText = "yoga";
        });
    }
    onAddTextClick();




}

