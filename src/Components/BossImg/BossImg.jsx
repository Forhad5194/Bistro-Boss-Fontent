
import Bossimg1 from '../../assets/home/chef-service.jpg'

const BossImg = () => {
    return (
        <div>
            <div className=' '>
                <div className="hero min-h-screen" style={{ backgroundImage: `url("${Bossimg1}")` }}>
                    <div className="h-[450px] w-[900px] rounded-xl bg-white"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-5xl font-bold text-black">Bistro Boss</h1>
                            <p className="w-[750px] text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum  deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto  ducimus incidunt quibusdam nemo.</p>
                            
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default BossImg;