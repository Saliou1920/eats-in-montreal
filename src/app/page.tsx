import RestaurantCard from '@/components/RestaurantCard';
import { restaurantData } from '@/utils/restaurantData';

export default function Home() {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1597463439561-56c1bc962dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80)`,
      }}
    >
      <div className="container mx-auto py-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {restaurantData.map((restaurant) => (
              <div key={restaurant.name}>
                <RestaurantCard restaurant={restaurant} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
