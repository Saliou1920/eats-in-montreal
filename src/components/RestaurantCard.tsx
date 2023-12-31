'use client';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from '@/utils/material-tailwind';
import {
  BanknotesIcon,
  StarIcon,
  HeartIcon,
  WifiIcon,
  HomeIcon,
  TvIcon,
  FireIcon,
} from '@/utils/heroicons';
import CarouselTest from './CarouselTest';
import Restaurant from '@/models/restaurant';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const Example: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  const handleDirectionClick = (address: string) => {
    const mapUrl = `https://www.google.com/maps/dir//${encodeURIComponent(
      address
    )}`;
    window.open(mapUrl, '_blank');
  };

  return (
    <Card className="w-full max-w-[26rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <CarouselTest />
        <div className="to-bg-black-10 inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        <IconButton
          size="sm"
          color="red"
          variant="text"
          className="!absolute top-4 right-4 rounded-full"
        >
          <HeartIcon className="h-6 w-6" />
        </IconButton>
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            {restaurant.name}
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
            {restaurant.rating}
          </Typography>
        </div>
        <Typography color="gray">{restaurant.description}</Typography>
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
          <Tooltip content="$129 per night">
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <BanknotesIcon className="h-5 w-5" />
            </span>
          </Tooltip>
          <Tooltip content="Free wifi">
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <WifiIcon className="h-5 w-5" />
            </span>
          </Tooltip>
          <Tooltip content="2 bedrooms">
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <HomeIcon className="h-5 w-5" />
            </span>
          </Tooltip>
          <Tooltip content={`65" HDTV`}>
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <TvIcon className="h-5 w-5" />
            </span>
          </Tooltip>
          <Tooltip content="Fire alert">
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <FireIcon className="h-5 w-5" />
            </span>
          </Tooltip>
          <Tooltip content="And +20 more">
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              +20
            </span>
          </Tooltip>
        </div>
      </CardBody>
      <CardFooter className="pt-3">
        <Button
          size="lg"
          fullWidth={true}
          onClick={() => handleDirectionClick(restaurant.address)}
        >
          Direction
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Example;
