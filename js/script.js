{
    const onChangeBackgroundClick = () => {
        const colorUpdated = document.querySelector(".body--colorUpdated");
        const colorName = document.querySelector(".js-colorName");
        const changeColor = document.querySelector(".js-changeColor");
        changeColor.addEventListener("click", (e) => {
            colorUpdated.classList.toggle("body--newColor");
            colorUpdated.classList.contains("body--newColor")
                ? (colorName.innerHTML = "Light")
                : (colorName.innerHTML = "Dark");
        })
    };

    const onImageButtonClick = () => {
        const hideImageButtton = document.querySelector(".js-hideImage");
        const image = document.querySelector(".js-image")
        const orginalImageButtton = document.querySelector(".js-orginalImage");
        hideShowImage(hideImageButtton, image);
        showOrginalImageSize(orginalImageButtton, image);
    }

    const showOrginalImageSize = (orginalImageButtton, image) => {
        orginalImageButtton.addEventListener("click", (e) => {
            image.classList.toggle("body__imageStyle");
            orginalImageButtton.innerText = image.classList.contains("body__imageStyle")
                ? "Orginal image size"
                : "Rounded image size";
        });
    }


    const hideShowImage = (hideImageButtton, image) => {
        hideImageButtton.addEventListener("click", (e) => {
            image.classList.toggle("body__imageStyleHiden");
            hideImageButtton.innerText = image.classList.contains("body__imageStyleHiden")
                ? "Show image"
                : "Hide image";
        });
    }

    const onRemoveImageButtonClick = () => {
        const imageAction = document.querySelector(".body__imageStyle");
        const buttonRemove = document.querySelector(".js-buttonRemove");
        buttonRemove.addEventListener("click", () => {
            imageAction.remove();
        });
    }

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

    const onAddTextClick = () => {
        const showTextButton2 = document.querySelector(".js-textShow2");
        showTextButton2.addEventListener("click", (e) => {
            showTextButton2.innerText = "yoga";
        });
    }

    const init = () => {
        onChangeBackgroundClick();
        onImageButtonClick();
        onRemoveImageButtonClick();
        onShowTextOnClick();
        onAddTextClick();
    }

    init();
}

