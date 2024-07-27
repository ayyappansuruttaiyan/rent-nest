import PropTypes from "prop-types";
function Property({ property }) {
  const {
    id,
    name,
    area,
    propertyType,
    rentAmt,
    advanceAmt,
    amenities,
    city,
    image,
    sqft,
    postedBy,
  } = property;
  return (
    <div className=" mb-4 ">
      <div
        key={id}
        className=" bg-white border border-slate-200 p-4 rounded-lg flex gap-8"
      >
        <div>
          <img
            src={image}
            alt="property image"
            className=" min-w-80 max-w-80 min-h-60 max-h-60 rounded-md object-cover"
          />
        </div>
        <div className="flex flex-col justify-between font-thin">
          <div>
            <h1 className=" font-semibold uppercase ">{name}</h1>
            <p className=" font-thin">
              <span className=" font-medium">
                {propertyType} Flat for rent{" "}
              </span>{" "}
              in {area}, {city}.
            </p>
          </div>
          <div className="flex justify-between">
            <p className=" font-semibold">
              &#8377;{rentAmt}/month <br /> +
              <span className=" font-normal">
                Deposit &#8377;
                {advanceAmt}
              </span>
            </p>
            <p>
              <span className=" font-normal">{sqft} Sqft</span>
              <br />
              Super Buildup Area
            </p>
            <p>
              {sqft} Sqft <br />
              Super Buildup Area
            </p>
          </div>
          <div>
            <p>
              <span className=" font-normal">Amenities:</span> {amenities}.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p>
              <span className=" font-normal">Posted by:</span> {postedBy}
            </p>

            <button className=" bg-blue-800 px-4 py-2 text-center rounded-md text-slate-100 font-semibold">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Property.propTypes = {
  property: PropTypes.object.isRequired,
};

export default Property;
