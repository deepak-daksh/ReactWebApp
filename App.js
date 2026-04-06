import React from "react";
import ReactDOM from "react-dom/client";

const logoPath =
  "data:image/png;base64,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";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img alt="logo" className="logo" src={logoPath} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


const RestorantCart = (props) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    sla: { slaString },
  } = props.resData;

const restroImgPath =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId;


  return (
    <div className="cart">
      <img src={restroImgPath} />
      <h4>{name}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <p>
        <span>Rating : {avgRatingString}</span> , {slaString}
      </p>
    </div>
  );
};

const restroList = [
  {
    card: {
      card: {
        "@type":
          "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
        collectionId: "83633",
        title: "North Indian",
        description: "Indulge with the best of North Indian cuisines.",
        imageId:
          "COLLECTIONS/IMAGES/MERCH/2025/1/24/820cca8e-ff06-4509-9855-2586384497f4_Northindian.png",
        aspectRatio: "3.44",
        cta: {
          link: "swiggy://collectionV2?collection_id=83633&tags=layout_CCS_NorthIndian,north%20indian,layout_NorthIndian,ads_pc_north_indian",
          type: "collectionv2",
        },
        type: "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
        count: "474 restaurants",
        navBarConfig: {},
      },
    },
  },
  {
    card: {
      card: {
        "@type":
          "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
        sortConfigs: [
          {
            key: "relevance",
            title: "Relevance (Default)",
            selected: true,
            defaultSelection: true,
          },
          {
            key: "deliveryTimeAsc",
            title: "Delivery Time",
          },
          {
            key: "modelBasedRatingDesc",
            title: "Rating",
          },
          {
            key: "costForTwoAsc",
            title: "Cost: Low to High",
          },
          {
            key: "costForTwoDesc",
            title: "Cost: High to Low",
          },
        ],
        restaurantCount: 474,
        facetList: [
          {
            label: "10 Mins Delivery",
            id: "isRestaurantBolt",
            selection: "SELECT_TYPE_SINGLESELECT",
            facetInfo: [
              {
                label: "10 Mins Delivery",
                id: "isRestaurantBoltfacetquery0",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_FLATTENED",
            subLabel: "Filter by",
            icon: "COLLECTIONS/IMAGES/MERCH/2024/12/18/4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png",
            selectedIcon:
              "COLLECTIONS/IMAGES/MERCH/2024/12/26/3072d307-2f8e-471c-862d-d426fb93c0bf_4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png",
          },
          {
            label: "Veg/Non-Veg",
            id: "isVeg",
            selection: "SELECT_TYPE_MULTISELECT",
            facetInfo: [
              {
                label: "Non Veg",
                id: "isVegfacetquery0",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Pure Veg",
                id: "isVegfacetquery1",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_HALF_CARD",
            subLabel: "Filter by",
            openFilter: true,
          },
          {
            label: "Ratings",
            id: "rating",
            selection: "SELECT_TYPE_MULTISELECT",
            facetInfo: [
              {
                label: "Ratings",
                id: "ratingfacetquery0",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Ratings 4.0+",
                id: "ratingfacetquery1",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Ratings 4.5+",
                id: "ratingfacetquery2",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_HALF_CARD",
            subLabel: "Filter by",
            openFilter: true,
          },
          {
            label: "Delivery Time",
            id: "deliveryTime",
            selection: "SELECT_TYPE_MULTISELECT",
            facetInfo: [
              {
                label: "Less than 30 mins",
                id: "deliveryTimefacetquery0",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Less than 45 mins",
                id: "deliveryTimefacetquery1",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_HALF_CARD",
            subLabel: "Filter by",
            openFilter: true,
          },
          {
            label: "Cost For Two",
            id: "costForTwo",
            selection: "SELECT_TYPE_MULTISELECT",
            facetInfo: [
              {
                label: "Less than Rs. 300",
                id: "costForTwofacetquery0",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Rs.300 - Rs.600",
                id: "costForTwofacetquery1",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Greater than Rs. 600",
                id: "costForTwofacetquery2",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_HALF_CARD",
            subLabel: "Filter by",
            openFilter: true,
          },
        ],
        widgetId: "inlineFacetFilter",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
        layout: {
          rows: 1,
          widgetPadding: {
            left: 16,
            top: 12,
            right: 16,
          },
          widgetTheme: {
            defaultMode: {
              backgroundColour: "#FFFFFF",
              theme: "THEME_TYPE_LIGHT",
            },
            darkMode: {
              backgroundColour: "#1B3028",
              theme: "THEME_TYPE_DARK",
            },
          },
        },
        id: "restaurantCountWidget",
        gridElements: {
          infoWithStyle: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            text: "474 Restaurants to explore",
            headerStyling: {
              textSize: 15,
              textColor: "text_color_highest_emphasis",
              textFontName: "FONT_NAME_HEADER_H5",
              maxLines: 1,
            },
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "24811",
          name: "Singla's Sweets, Bakery & Restaurant",
          cloudinaryImageId: "2ba0ecc76a854c73dfd67be6b86ed0aa",
          locality: "Patparganj",
          areaName: "Patparganj",
          costForTwo: "₹250 for two",
          cuisines: [
            "Sweets",
            "North Indian",
            "Chinese",
            "South Indian",
            "Italian",
            "Bakery",
          ],
          avgRating: 4.5,
          veg: true,
          parentId: "474810",
          avgRatingString: "4.5",
          totalRatingsString: "123K+",
          promoted: true,
          adTrackingId:
            "cid=bb64ff5a-5f89-4d39-a617-473e0a5bb00b~p=0~adgrpid=bb64ff5a-5f89-4d39-a617-473e0a5bb00b#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=24811~plpr=COLLECTION~eid=6ef7e11e-2eaf-41e3-8e81-b59b3c0ae22e~srvts=1775458311261~collid=83633",
          sla: {
            deliveryTime: 43,
            lastMileTravel: 6,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "6.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-04-07 00:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                      theme: "light",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "10K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "bb64ff5a-5f89-4d39-a617-473e0a5bb00b",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=24811&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1308438",
          name: "Big Bowl",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/12/d4dc9cb2-9991-48a9-a955-8d2fc1e2b38c_1308438.jpg",
          locality: "Brodipet",
          areaName: "Chand Central, Mayur Vihar-1",
          costForTwo: "₹250 for two",
          cuisines: ["Chinese", "Tibetan", "Desserts"],
          avgRating: 4.2,
          parentId: "434792",
          avgRatingString: "4.2",
          totalRatingsString: "13",
          sla: {
            deliveryTime: 31,
            lastMileTravel: 3.9,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "3.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-04-06 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹149",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          isNewlyOnboarded: true,
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1308438&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "12772",
          name: "Vaishno Amritsari Naan - Satish Dhaba",
          cloudinaryImageId: "ekcrdo9r7vwgw6o9lhsz",
          locality: "IP Extension",
          areaName: "IP Extension",
          costForTwo: "₹250 for two",
          cuisines: ["North Indian", "Indian", "Thalis", "Punjabi"],
          avgRating: 4.3,
          veg: true,
          parentId: "387871",
          avgRatingString: "4.3",
          totalRatingsString: "127K+",
          promoted: true,
          adTrackingId:
            "cid=1b53d138-b779-4b26-b444-eb07f00795ad~p=1~adgrpid=1b53d138-b779-4b26-b444-eb07f00795ad#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=12772~plpr=COLLECTION~eid=aad81ced-b554-474b-9bac-a17223b625f9~srvts=1775458311261~collid=83633",
          sla: {
            deliveryTime: 28,
            lastMileTravel: 4.5,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "4.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-04-06 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "pureveg",
                      theme: "light",
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹75 OFF",
            subHeader: "ABOVE ₹199",
            discountTag: "FLAT DEAL",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "3.9",
              ratingCount: "2.4K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "1b53d138-b779-4b26-b444-eb07f00795ad",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=12772&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "591303",
          name: "Dum Safar Biryani",
          cloudinaryImageId: "xfrukzybbbalygk4chfe",
          locality: "Hotel Savoy Suites",
          areaName: "Sector 16",
          costForTwo: "₹500 for two",
          cuisines: [
            "Biryani",
            "Hyderabadi",
            "Kebabs",
            "North Indian",
            "barbeque",
          ],
          avgRating: 4.4,
          parentId: "351013",
          avgRatingString: "4.4",
          totalRatingsString: "2.3K+",
          sla: {
            deliveryTime: 32,
            lastMileTravel: 4.3,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "4.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-04-06 16:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=591303&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "422957",
          name: "Bhatia Sweets",
          cloudinaryImageId: "yt24vs3ghl4xdge1uxde",
          locality: "IP Extension",
          areaName: "IP Extension",
          costForTwo: "₹500 for two",
          cuisines: ["Sweets", "Snacks", "Desserts"],
          avgRating: 4.6,
          veg: true,
          parentId: "235317",
          avgRatingString: "4.6",
          totalRatingsString: "3.8K+",
          promoted: true,
          adTrackingId:
            "cid=98d28831-ee3e-4d8b-a9fb-9682f823de88~p=2~adgrpid=98d28831-ee3e-4d8b-a9fb-9682f823de88#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=422957~plpr=COLLECTION~eid=57ea06e0-61ee-4332-acf9-eb6d4bb40f13~srvts=1775458311261~collid=83633",
          sla: {
            deliveryTime: 23,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-04-06 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "3.6",
              ratingCount: "430",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "98d28831-ee3e-4d8b-a9fb-9682f823de88",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=422957&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1178897",
          name: "Charcoal Eats - Biryani & Beyond",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/27/c66f1714-96b5-4012-b595-f14d9c645597_1178897.jpg",
          locality: "Sector 18",
          areaName: "Sector 18",
          costForTwo: "₹600 for two",
          cuisines: ["Biryani", "Rolls & Wraps", "North Indian"],
          avgRating: 4.2,
          parentId: "5338",
          avgRatingString: "4.2",
          totalRatingsString: "199",
          sla: {
            deliveryTime: 13,
            lastMileTravel: 0.6,
            serviceability: "SERVICEABLE",
            slaString: "10-15 mins",
            lastMileTravelString: "0.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-04-07 04:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1178897&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "623102",
          name: "Khadak Singh Da Dhaba",
          cloudinaryImageId: "8144bf37947c161953f656308d1bfc30",
          locality: "Pandav Nagar",
          areaName: "Mayur Vihar Phase 1",
          costForTwo: "₹300 for two",
          cuisines: ["North Indian", "Biryani", "Chinese"],
          avgRating: 4.1,
          parentId: "13170",
          avgRatingString: "4.1",
          totalRatingsString: "4.1K+",
          promoted: true,
          adTrackingId:
            "cid=ecd6d47a-1fe1-4083-9f02-117dc0aaff7d~p=3~adgrpid=ecd6d47a-1fe1-4083-9f02-117dc0aaff7d#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=623102~plpr=COLLECTION~eid=cb586517-806e-47e3-b9b7-e9e18b1d3d6d~srvts=1775458311261~collid=83633",
          sla: {
            deliveryTime: 36,
            lastMileTravel: 4.9,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "4.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-04-06 23:45:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            discountTag: "FLAT DEAL",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "ecd6d47a-1fe1-4083-9f02-117dc0aaff7d",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=623102&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

const MainContainer = () => {
  return (
    <div className="main-container">
      <div className="search-area">Search</div>
      <div className="cart-area">
        {restroList
          .filter((items) => items?.card?.card?.info)
          .map((items) => {
            return (
              <RestorantCart
                resData={items?.card?.card?.info || {}}
                key={items?.card?.card?.info?.id}
              />
            );
          })}
        {/* <RestorantCart resData={restroList[3]?.card?.card?.info}
        />
        <RestorantCart resData={restroList[4]?.card?.card?.info}
        /> */}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2026 My App. All rights reserved.</p>
    </div>
  );
};

const LayoutComponent = () => {
  return (
    <>
      <div className="page-layout">
        <Header />
        <MainContainer />
        <Footer />
      </div>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LayoutComponent />);
