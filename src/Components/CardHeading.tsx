interface HeadingProps {
  name: string;
  location: string;
  jobTitle: string;
}
const CardHeading = (props: HeadingProps) => {
  return (
    <div className="text-center">
      <h1 className="text-3xl text-white font-bold mt-6">{props.name}</h1>
      <p className="text-NeonGreen text-sm font-bold">{props.location}</p>
      <p className="text-sm my-6 text-white">"{props.jobTitle}"</p>
    </div>
  );
};

export default CardHeading;
