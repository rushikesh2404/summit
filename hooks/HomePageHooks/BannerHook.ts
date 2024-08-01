import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import getBannerAPI from '../../services/api/home-page-apis/banner-api';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import useHandleStateUpdate from '../GeneralHooks/handle-state-update-hook';

const useBanner = () => {
  const { isLoading, setIsLoading, errorMessage, setErrMessage }: any = useHandleStateUpdate();
  const [allBannerData, setAllBannerData] = useState<any>([]);
  const tokenFromStore: any = useSelector(get_access_token);

  const fetchBannerDataFunction = async () => {
    setIsLoading(true);
    try {
      const getBannerData = await getBannerAPI(tokenFromStore?.token);
      console.log('banner', getBannerData);
      if (getBannerData?.status === 200 && getBannerData?.data?.status === 'Success') {
        setAllBannerData(getBannerData?.data?.data);
      } else {
        setAllBannerData([]);
      }
    } catch (error) {
      return;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBannerDataFunction();
  }, []);

  return {
    allBannerData,
    isLoading,
    errorMessage,
  };
};

export default useBanner;
