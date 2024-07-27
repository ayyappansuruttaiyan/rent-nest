import { getProperties as getPropertiesApi } from "../../services/apiProperties";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../ui/Spinner";
import Property from "./Property";

function Properties() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["properties"],
    queryFn: getPropertiesApi,
  });
  if (isLoading) return <Spinner />;
  if (error)
    return (
      <div className=" flex items-center mx-auto">
        Properties could not be loaded.
      </div>
    );
  if (!data) return "no properties";

  return (
    <div className="col-span-3 row-span-2 mr-8 mb-8">
      <p className=" font-semibold text-2xl mb-6">
        {data.length} results | Property for Rent in {data[0].city}
      </p>
      {data &&
        data.map((property) => (
          <Property property={property} key={property.id} />
        ))}
    </div>
  );
}

export default Properties;
