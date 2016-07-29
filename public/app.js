var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Advertisement = (function () {
    function Advertisement() {
    }
    return Advertisement;
}());
var CarAdvertisement = (function (_super) {
    __extends(CarAdvertisement, _super);
    function CarAdvertisement() {
        _super.apply(this, arguments);
    }
    return CarAdvertisement;
}(Advertisement));
var RealEstateAdvertisement = (function (_super) {
    __extends(RealEstateAdvertisement, _super);
    function RealEstateAdvertisement() {
        _super.apply(this, arguments);
    }
    return RealEstateAdvertisement;
}(Advertisement));
var MobilePhoneAdvertisement = (function (_super) {
    __extends(MobilePhoneAdvertisement, _super);
    function MobilePhoneAdvertisement() {
        _super.apply(this, arguments);
    }
    return MobilePhoneAdvertisement;
}(Advertisement));
var AdvertisementArray = new Array();
window.onload = windowOnLoadCallBack;
function windowOnLoadCallBack() {
    console.log("windowOnLoadCallBack - Start");
    var ads = getAdsData();
    for (var i = 0; i < ads.length; i++) {
        var ad = ads[i];
        var templateString = "";
        if (ad instanceof CarAdvertisement) {
            templateString = "<div class='item'><img src= 'images/no-image-available.png' /> <div class='item-content'> " +
                "<div class='left-content' ><span id='title' > " + ad.Title + "</span><span id= 'description'> " + ad.Category + " </span>" +
                "<span id= 'specificInfo' > Model: " + ad.Model + " </span></div><div class='right-content' ><span id='price' > Pkr " + ad.Price + " rs. </span>" +
                "<span id= 'condition' > " + ad.Condition + " </span></div></div></div>";
        }
        else if (ad instanceof MobilePhoneAdvertisement) {
            templateString = "<div class='item'><img src= 'images/no-image-available.png' /> <div class='item-content'> " +
                "<div class='left-content' ><span id='title' > " + ad.Title + "</span><span id= 'description'> " + ad.Brand + " </span>" +
                "<span id= 'specificInfo' > Color: " + ad.Color + " </span></div><div class='right-content' ><span id='price' > Pkr " + ad.Price + " rs. </span>" +
                "<span id= 'condition' > " + ad.Condition + " </span></div></div></div>";
        }
        else if (ad instanceof RealEstateAdvertisement) {
            templateString = "<div class='item'><img src= 'images/no-image-available.png' /> <div class='item-content'> " +
                "<div class='left-content' ><span id='title' > " + ad.Title + "</span><span id= 'description'> " + ad.Category + " </span>" +
                "<span id= 'specificInfo' > " + ad.Address + " </span></div><div class='right-content' ><span id='price' > Pkr " + ad.Price + " rs. </span>" +
                "<span id= 'condition' > " + ad.Area + " </span></div></div></div>";
        }
        var newAdvertisementDiv = document.createElement("div");
        newAdvertisementDiv.innerHTML = templateString;
        document.getElementById("content").appendChild(newAdvertisementDiv);
    }
    console.log("windowOnLoadCallBack - End");
}
function getAdsData() {
    var Ads = new Array();
    var carData = getCarData();
    for (var i = 0; i < carData.length; i++) {
        Ads.push(carData[i]);
    }
    var mobileData = getMobileData();
    for (var j = 0; j < mobileData.length; j++) {
        Ads.push(mobileData[j]);
    }
    var realEstateData = getRealstateData();
    for (var k = 0; k < realEstateData.length; k++) {
        Ads.push(realEstateData[k]);
    }
    return Ads;
}
function getMobileData() {
    var mobileAds = new Array();
    var mobileAd = new MobilePhoneAdvertisement();
    mobileAd.Brand = "Apple";
    mobileAd.Title = "iPhone 6s";
    mobileAd.Condition = "10/10";
    mobileAd.Price = 60000;
    mobileAd.Color = "Silver";
    mobileAds.push(mobileAd);
    mobileAd = new MobilePhoneAdvertisement();
    mobileAd.Brand = "Apple";
    mobileAd.Title = "iPhone 6s Plus";
    mobileAd.Condition = "10/10";
    mobileAd.Price = 65000;
    mobileAd.Color = "Rose Gold";
    mobileAds.push(mobileAd);
    mobileAd = new MobilePhoneAdvertisement();
    mobileAd.Brand = "Samsung";
    mobileAd.Title = "S6";
    mobileAd.Condition = "10/10";
    mobileAd.Price = 60000;
    mobileAd.Color = "White";
    mobileAds.push(mobileAd);
    mobileAd = new MobilePhoneAdvertisement();
    mobileAd.Brand = "Samsung";
    mobileAd.Title = "S6 Edge";
    mobileAd.Condition = "10/10";
    mobileAd.Price = 65000;
    mobileAd.Color = "Black";
    mobileAds.push(mobileAd);
    mobileAd = new MobilePhoneAdvertisement();
    mobileAd.Brand = "LG";
    mobileAd.Title = "Nexus";
    mobileAd.Condition = "10/10";
    mobileAd.Price = 45000;
    mobileAd.Color = "Silver";
    mobileAds.push(mobileAd);
    return mobileAds;
}
function getRealstateData() {
    var realEstateAds = new Array();
    var realEstateAd = new RealEstateAdvertisement();
    realEstateAd.Area = "250SqYd";
    realEstateAd.Category = "Residential";
    realEstateAd.Price = 3500000;
    realEstateAd.Address = "DHA Karachi";
    realEstateAd.Title = "200 Sq. Yard House in DHA Karachi";
    realEstateAds.push(realEstateAd);
    realEstateAd = new RealEstateAdvertisement();
    realEstateAd.Area = "300SqYd";
    realEstateAd.Category = "Residential";
    realEstateAd.Price = 4000000;
    realEstateAd.Address = "Clifton Karachi";
    realEstateAd.Title = "300 Sq. Yard House in Clifton Karachi";
    realEstateAds.push(realEstateAd);
    realEstateAd = new RealEstateAdvertisement();
    realEstateAd.Area = "350SqYd";
    realEstateAd.Category = "Commerial";
    realEstateAd.Price = 500000;
    realEstateAd.Address = "Orangi Town";
    realEstateAd.Title = "350 Sq. Yard House in Orangi Town Karachi";
    realEstateAds.push(realEstateAd);
    realEstateAd = new RealEstateAdvertisement();
    realEstateAd.Area = "355SqYd";
    realEstateAd.Category = "Commercial";
    realEstateAd.Price = 4000000;
    realEstateAd.Address = "Korangi";
    realEstateAd.Title = "355 Sq. Yard House in Korangi Karachi";
    realEstateAds.push(realEstateAd);
    realEstateAd = new RealEstateAdvertisement();
    realEstateAd.Area = "250SqYd";
    realEstateAd.Category = "Residential";
    realEstateAd.Price = 500000;
    realEstateAd.Address = "Nazimabad";
    realEstateAd.Title = "250 Sq. Yard House in Nazimabad Karachi";
    realEstateAds.push(realEstateAd);
    return realEstateAds;
}
function getCarData() {
    var cadAds = new Array();
    var carAd = new CarAdvertisement();
    carAd.Condition = "Excellent";
    carAd.Category = "Honda";
    carAd.Model = "2016";
    carAd.Price = 3000000;
    carAd.Title = "Vezel";
    cadAds.push(carAd);
    carAd = new CarAdvertisement();
    carAd.Condition = "Very Good";
    carAd.Category = "Honda";
    carAd.Model = "2016";
    carAd.Price = 1300000;
    carAd.Title = "City";
    cadAds.push(carAd);
    carAd = new CarAdvertisement();
    carAd.Condition = "Excellent";
    carAd.Category = "Toyota";
    carAd.Model = "2016";
    carAd.Price = 2500000;
    carAd.Title = "Prius";
    cadAds.push(carAd);
    carAd = new CarAdvertisement();
    carAd.Condition = "Excellent";
    carAd.Category = "Audi";
    carAd.Model = "2016";
    carAd.Price = 6500000;
    carAd.Title = "A5";
    cadAds.push(carAd);
    carAd = new CarAdvertisement();
    carAd.Condition = "Excellent";
    carAd.Category = "Toyota";
    carAd.Model = "2016";
    carAd.Price = 1900000;
    carAd.Title = "Corrola";
    cadAds.push(carAd);
    return cadAds;
}
//# sourceMappingURL=app.js.map