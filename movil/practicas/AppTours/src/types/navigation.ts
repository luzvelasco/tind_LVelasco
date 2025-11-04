import { NavigatorScreenParams } from "@react-navigation/native"

export type NavStackParams = {
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

export const API_URL = 'http://localhost:3001/api';