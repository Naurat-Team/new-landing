const VideoDemo = () => {
    return (
        <div className="flex justify-center items-center">
            <video className="w-full max-w-4xl rounded-2xl shadow-lg" autoPlay
                loop
                muted
                controls
                playsInline>
                <source src="/demo/Demo.mp4"
                    // <source src="/public/demo/Demo.mp4"


                    type="video/mp4" />
                Tu navegador no soporta la reproducción de videos.
            </video>
        </div>
    );
};

export default VideoDemo;
