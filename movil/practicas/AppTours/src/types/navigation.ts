import { NavigatorScreenParams } from "@react-navigation/native"

export type TabStack = {
    TourList:NavigatorScreenParams<NavTabsParams>;
    TourDetails:{tourId:string};
}

export type NavTabsParams = {
    All: undefined;
    Best: undefined;
    New: undefined;
}

export type NavDrawerParams = {
    Bookings: undefined;
    Profile: undefined;
    Home: NavigatorScreenParams<NavStackParams>;

}