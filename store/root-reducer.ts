import { combineReducers } from '@reduxjs/toolkit';
import CacheReducer from './slices/general_slices/cache-slice';
import HomeTopCategoriesReducer from './slices/home_page_slice/home-top-categories-slice';
import HomeTopBrandReducer from './slices/home_page_slice/home-brand-slice';
import LoginReducer from './slices/auth/login_slice';
import registrationDataReducer from './slices/auth/registration_slice';
import notifications from './slices/general_slices/toast_notification_slice';
import ShippinAddressReducer from './slices/checkoutPage-slice/customer-shipping-address-slice';
import BillingAddressReducer from './slices/checkoutPage-slice/customer-billing-address-slice';
import OrderSummaryReducer from './slices/checkoutPage-slice/order-summary';
import StoreAddressReducer from './slices/checkoutPage-slice/store-customer-address-slice';
import ProductDetailDataReducer from './slices/product-detail-page-slices/product-detail-data-slice';
import ProductVariantsDataReducer from './slices/product-detail-page-slices/product-variants-data-slice';
import ProductMatchingItemsReducer from './slices/product-detail-page-slices/product-item-options-slice';
import StockAvailabilityReducer from './slices/product-detail-page-slices/product-stock-availability-slice';
import ProfileDataReducer from './slices/general_slices/profile-page-slice';
import CartListingReducer from './slices/cart-listing-page-slice/cart-listing-slice';
import OrderListingReducer from './slices/order-listing-page-slice/order-listing-page-slice';
import WishlistReducer from './slices/wishlist-slice/wishlist-slice';
import SelectedLanguageReducer from './slices/language-slice/selected-language-slice';
import LanguageReducer from './slices/language-slice/language-json-slice';
import CurrencyReducer from './slices/general_slices/multi-currency-slice';
import QuickOrderReducer from './slices/general_slices/quick-order-slice';
import GetAccessTokenReducer from './slices/auth/token-login-slice';
import CatalogListReducer from './slices/catalog-page-slice/get-catalog-slice';
import MultiLanguageReducer from './slices/general_slices/multilang-slice';
import SelectedFilterLangDataScreen from './slices/general_slices/selected-multilanguage-slice';
import DealerledgerSummary from './slices/dealer-ledger-slice/dealer-ledger-summary';
import Dealerledger from './slices/dealer-ledger-slice/dealer-ledger-slice';
import Banner from './slices/general_slices/banner-slice';
import ProductListTestimonial from './slices/product-listing-page-slices/product-testimonial';
import HomeMarque from './slices/home_page_slice/home-marque-slice';
import CompanyMoto from './slices/home_page_slice/home-company-moto-slice';
import ProductReview from './slices/product-detail-page-slices/product-review-slice/product-review-slice';
import productOnHomeSlice from './slices/home_page_slice/get-product-list-on-home-slice';
import WarrantySerailNoDetails from './slices/warranty-check-slice/get-serial-no-details-slice';
import WarrantyGetClaim from './slices/warranty-check-slice/get-warranty-claim-slice';
import getCustomerWarrantyDetailsSlice from './slices/warranty-check-slice/get-customer-warranty-details-slice';
import WarrantySerialNoListSlice from './slices/warranty-check-slice/get-serial-no-list-slice';
import productSpecificationScreen from './slices/product-detail-page-slices/product-specification-slice';
import ValidatePincodeScreen from './slices/product-detail-page-slices/pincode-validate-slice';
import contactusSlice from './slices/general_slices/contactus-slice';
import homeAboutSlice from './slices/home_page_slice/home-about-slice';
import AboutUsSlice from './slices/general_slices/about-us-slice';
import totalCartCountReducer from './slices/general_slices/cart-count-slice'

const appReducer = combineReducers({
  CacheScreen: CacheReducer,
  HomeTopCategoriesScreen: HomeTopCategoriesReducer,
  HomeTopBrandScreen: HomeTopBrandReducer,
  LoginScreen: LoginReducer,
  RepoRegistrationScreen: registrationDataReducer,
  notifications: notifications,
  ShippingAddressScreen: ShippinAddressReducer,
  BillingAddressScreen: BillingAddressReducer,
  OrderSummaryScreen: OrderSummaryReducer,
  StoreAddressScreen: StoreAddressReducer,
  ProductDetailDataScreen: ProductDetailDataReducer,
  ProductVariantsDataScreen: ProductVariantsDataReducer,
  StockAvailabilityScreen: StockAvailabilityReducer,
  CartListingScreen: CartListingReducer,
  ProductMatchingItemsScreen: ProductMatchingItemsReducer,
  OrderListingScreen: OrderListingReducer,
  ProfileDataScreen: ProfileDataReducer,
  WishlistScreen: WishlistReducer,
  SelectedLanguageScreen: SelectedLanguageReducer,
  LanguagesScreen: LanguageReducer,
  CurrencyScreen: CurrencyReducer,
  QuickOrderScreen: QuickOrderReducer,
  GetAccessTokenScreen: GetAccessTokenReducer,
  CatalogListScreen: CatalogListReducer,
  MultilanguageScreen: MultiLanguageReducer,
  SelectedFilterLangDataScreen: SelectedFilterLangDataScreen,
  DealerledgerSummaryScreen: DealerledgerSummary,
  DealerledgerScreen: Dealerledger,
  Banner: Banner,
  ProductListTestimonial: ProductListTestimonial,
  HomeMarque: HomeMarque,
  CompanyMoto: CompanyMoto,
  ProductReview: ProductReview,
  WarrantySerailNoDetailsSlice: WarrantySerailNoDetails,
  WarrantyGetClaimSlice: WarrantyGetClaim,
  GetCustomerWarrantyDetailsSlice: getCustomerWarrantyDetailsSlice,
  WarrantySerialNoListSlice: WarrantySerialNoListSlice,
  productListOnHome: productOnHomeSlice,
  productSpecification: productSpecificationScreen,
  validatePincode: ValidatePincodeScreen,
  ContactUsSlice: contactusSlice,
  HomeAboutScreen: homeAboutSlice,
  AboutUsScreen: AboutUsSlice,
  totalCartCountScreen: totalCartCountReducer
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'Login/LogoutSuccess') {
    state = undefined;

    state = {} as RootState;
  }
  return appReducer(state, action);
};

export default rootReducer;
export type RootState = ReturnType<typeof appReducer>;
