import { FlexColumn, SpinnerContainer } from "../../../App.Styles";
import HeroSection from "./HeroSection/HeroSection";
import FeaturedProductsSection from "./FeaturedProductsSection/FeaturedProductsSection";
import TopRatedSection from "./TopRatedSection/TopRatedSection";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFeaturedProducts,
  getSliderImages,
} from "../../../Redux/Guest/guestActions";
import AllProduts from "./AllProduts/AllProduts";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getSliderImages());
    dispatch(getFeaturedProducts());
  }, [dispatch]);

  return state.guestState.isLoading ? (
    <SpinnerContainer />
  ) : (
    <FlexColumn>
      <HeroSection sliderProducts={state.guestState.sliderImages} />
      <AllProduts products={state.guestState.products} />
      <FeaturedProductsSection products={state.guestState.products} />
      <TopRatedSection topRatedProducts={state.guestState.sliderImages} />
    </FlexColumn>
  );
};

export default HomeScreen;
