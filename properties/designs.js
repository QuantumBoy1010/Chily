import { Dimensions } from "react-native";

export const windowDimensions = {
    windowWidth: Dimensions.get("window").width,
    windowHeight: Dimensions.get("window").height,

    defaultWidthOnWindows: 1200,
    defaultHeightOnWindows: 800,
};

export const globalBorderRadiuses = {
    //Border radiuses
    microBorderRadius: 1,
    exiguousBorderRadius: 2,
    tinyBorderRadius: 3,
    smallBorderRadius: 5,
    normalBorderRadius: 8,
    standardBorderRadius: 13,
    bigBorderRadius: 21,
    largeBorderRadius: 34,
    hugeBorderRadius: 55,
    giganticBorderRadius: 89,
    roundBorderRadius: 100,
}

export const globalComponentSizes = {
    //Button sizes

    //Border thickness:
    smallBorderThickness: 1,
    normalBorderThickness: 2,
    bigBorderThickness: 4,

    //Avatar
    avatarSize: 90,
    avatarPadding: 10,

    //Image info
    userInfoSectionWidth: 325,
    userInfoSectionHeight: 82,

    //Buttons
    userSettingButtonSize: 38,

    //Image preview sizes
    imagePreviewWidth_1: 50,
    imagePreviewHeight_1: 30,
    imagePreviewWidth_2: 80,
    imagePreviewHeight_2: 56,
    imagePreviewWidth_3: 100,
    imagePreviewHeight_3: 70,
    imagePreviewWidth_4: 150,
    imagePreviewHeight_4: 100,

};

export const globalAppIconSizes = {
    tabIcon: 10,
}

export const globalComponentPaddings = {
    noPadding: 0,
    sectionPadding: 2,
    elegantPadding: 5,
    universalPadding: 10,

    galleryPadding: 6,
}

export const globalComponentMargins = {
    noMargin: 0,
    lightMargin: 6,
    universalMargin: 10,
    smallMargin: 16,
    bigMargin: 20,
    largeMargin: 35,
    hugeMargin: 53,
}

export default {
    globalAppIconSizes,
    globalBorderRadiuses,
    globalComponentPaddings,
    globalComponentSizes,
    globalComponentMargins,
    windowDimensions,
}
