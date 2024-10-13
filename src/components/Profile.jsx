import data from "../data.json";
import rohanImage from "../assets/rohan.png";
import resume from "../assets/RohanKumar.pdf";
const Profile = () => (
    <div className="bg-dark rounded-lg p-6 sticky top-8 shadow-lg">
        <img
            src={rohanImage}
            alt="Rohan Kumar"
            className="w-48 h-48 object-cover mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-100 text-center">
            Rohan Kumar
        </h1>
        <p className="text-xl text-accent1 text-center mb-4">
            Software Developer
        </p>

        <div className="my-6">
            <a
                href={resume}
                target="_blank"
                className="block w-full bg-primary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded text-center transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
                Download CV
            </a>
        </div>

        <div className="space-y-2">
            {data?.socials?.map((element) => (
                <div
                    key={element.name}
                    className="flex justify-between items-center"
                >
                    <span className="text-gray-400">{element.name}:</span>
                    <a
                        href={element.url}
                        target="_blank"
                        className="text-accent2 hover:underline"
                    >
                        {element.username}
                    </a>
                </div>
            ))}
        </div>
    </div>
);

export default Profile;
