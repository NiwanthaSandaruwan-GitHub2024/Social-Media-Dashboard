import React, { useState,useEffect } from "react";
import '../styles/mainbody.css'
import { getChannelInfo, getChannelVideos } from '../utils/youtube_api';
import { getTwitterUserInfo, getTwitterFollowers } from '../utils/twitter_api';

function Mainbody({ children }) {
    const [channelData, setChannelData] = useState(null);
    const [videos, setVideos] = useState([]);
    const [activeSocialMedia, setActiveSocialMedia] = useState('instagram');
    const [activeSection, setActiveSection] = useState('youtubevideos');
     // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [comments, setComments] = useState([]);

    const formatNumber = (number) => {
        if (number < 1000) {
            return number.toString();
        } else if (number < 1000000) {
            return (number / 1000).toFixed(0) + 'K';
        } else {
            return (number / 1000000).toFixed(0) + 'M';
        }
    };

    const handleAPICall = async () => {
        try {
            const channelId = 'UCETxOvOv9_44-CUzsPlzyxQ';
            const channelInfo = await getChannelInfo(channelId);
            const channelVideos = await getChannelVideos(channelId);

            if (channelInfo && channelVideos) {
                setChannelData(channelInfo.items[0]);
                setVideos(channelVideos.items);
                setError(null);
            } else {
                console.error('Error fetching channel data or videos');
                setError('Error fetching channel data or videos');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Error fetching data');
        }
    };

    const handleClickSocialMedia = (socialMedia) => {
        setActiveSocialMedia(socialMedia);
    };

    const handleClickSection = (section) => {
        setActiveSection(section);
    };

    
        const [userInfo, setUserInfo] = useState(null);
        const [followers, setFollowers] = useState(null);
    
            const fetchData = async () => {
                const username = 'chanuxbro'; 
                const userData = await getTwitterUserInfo(username);
                const followerData = await getTwitterFollowers(username);
                
                if (userData) {
                    setUserInfo(userData.data);
                }
                if (followerData) {
                    setFollowers(followerData.data);
                }
            };
    
            fetchData();

            useEffect(() => {
                handleAPICall();
            }, []); 
        
    return (
        <div>
            <div className="socialmediasection">
                <div className="socialcard instagram" onClick={() => {handleClickSocialMedia('instagram'); handleAPICall();}}>
                    <div className="instergramlogo"></div>
                    <div className="socialmedianame">Instergram</div>
                    <div className="Followercount"> <p>120.5 k</p></div>
                </div>
                <div className="socialcard facebook" onClick={() => {handleClickSocialMedia('facebook'); handleAPICall();}}>
                    <div className="facebooklogo"></div>
                    <div className="socialmedianame">Facebook</div>
                    <div className="Followercount SECOND"> <p>1M</p></div>
                </div>
                <div className="socialcard youtube" onClick={() => { handleClickSocialMedia('youtube'); handleAPICall(); }}>
                    <div className="youtubelogo"></div>
                    <div className="socialmedianame">Youtube</div>
                    <div className="Followercount SECOND"> <p>{channelData && formatNumber(parseInt(channelData.statistics.subscriberCount))}</p></div>
                </div>

                <div className="socialcard tweeter" onClick={() => { handleClickSocialMedia('twitter'); handleAPICall(); }}>
                    <div className="twitterlogo"></div>
                    <div className="socialmedianame">Twitter</div>
                    <div className="Followercount"> <p>19.9 k</p></div>
                </div>
            </div>
            <div className="mininav"><h4>Home / Dashboard /Social Media</h4></div>
            {activeSocialMedia === 'instagram' && (
                <div className="profilecard">
                    <div className="socialmedialogoinsta">

                    <div className="Channelname">{channelData && channelData.snippet.title}</div>
                        {channelData && channelData.snippet && channelData.snippet.thumbnails && (
                            <img src={channelData.snippet.thumbnails.default.url} alt="channellogo" className="youtubelogomain" />
                        )}
                        {/* <div className="instergramlogomain"></div> */}
                        <div>
                            <div className="followercount"><p className="count">120.5 K</p></div>
                            <div className="followercountname"><p>Followers</p></div>
                            <progress className="progressbar" id="file" value="80" max="100"></progress><p className="progresspresentage">80% </p>
                        </div>
                    </div>
                    <div className="performance">
                        <div>
                            <div className="performancetext"><p>Latest post performance</p></div>
                            <div className="performancecounts">
                                <div className="performancecountsbox"><div className="performancecountimages image1"></div><h3>39k</h3><p>Impressions</p></div>
                                <div className="performancecountsbox"><div className="performancecountimages image2"></div><h3>1600</h3><p>Likes</p></div>
                                <div className="performancecountsbox"><div href="#" className="performancecountimages image3"></div><h3>217</h3><p>Comments</p></div>
                                <div className="performancecountsbox"><div href="#" className="performancecountimages image4"></div><h3 className="highrate">4.11%</h3><p className="high">Engagment rate</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="trafficsection">
                        <div>
                            <div className="traffictext"><p>Website traffic from Instergram</p></div>
                            <div className="trafficdetailssection">
                                <div className="traffictextcounts"><div className="trafficsession"><div className="trafficsessions">220.1 k</div><h4>Sessions</h4><div><div className="sessionperentage"><div className="upimage"></div>33%<p>vs last month</p></div></div></div></div>
                                <div className="trafficchart"> <div className="line-chart">
                                    <div className='grafico'>
                                        <ul className='eje-y'>
                                            <li data-ejey='200k'></li>
                                            <li data-ejey='20 k'></li>
                                            <li data-ejey='2 k'></li>
                                            <li data-ejey='0'></li>
                                        </ul>
                                        <ul className='eje-x'>
                                            <li>6 Apr</li>
                                            <li>13 May</li>
                                            <li>20 Jun</li>
                                        </ul>
                                        <span data-valor='25'>
                                            <span data-valor='8'>
                                                <span data-valor='13'>
                                                    <span data-valor='5'>
                                                        <span data-valor='23'>
                                                            <span data-valor='12'>
                                                                <span data-valor='15'>
                                                                </span></span></span></span></span></span></span>
                                    </div>

                                </div></div>
                            </div>
                        </div>
                    </div>
                    <div className="revenuesection">
                        <div className="revenuesectionbtns">
                            <button className="btn">Posts</button>
                            <button className="btn">Comments</button>
                            <button className="btn">Profile Views</button>
                            <button className="btn">Profile</button>
                        </div>
                        <div className="revenuesectionview">
                        <div className="revenuesectionviewyoutube">
                           
                           <div className="videocontaner">
                               {videos.map((video) => (
                                   <div className="videocard" key={video.id.videoId}>
                                       <div>
                                           <img src={video.snippet.thumbnails.default.url} alt="Video Thumbnail" className="videoimage" />
                                       </div>
                                       <div className="videotitile">
                                           <h3>{video.snippet.title}</h3>
                                           <p>{video.snippet.description}</p>
                                       </div>
                                   </div>
                               ))}
                           </div>
                   </div>
                        </div>
                    </div>
                </div>
            )}
          {activeSocialMedia === 'facebook' && (
                <div className="profilecard">
                    <div className="socialmedialogoinsta">
                        <div className="Channelname">{channelData && channelData.snippet.title}</div>
                        {channelData && channelData.snippet && channelData.snippet.thumbnails && (
                            <img src={channelData.snippet.thumbnails.default.url} alt="channellogo" className="youtubelogomain" />
                        )}
                        <div className="youtubemaincardsub">
                            <div className="followercount"><p className="count">1M</p></div>
                            <div className="followercountname"><p>Followers</p></div>
                            <progress className="youtubeprogressbar" id="file" value="68" max="100"></progress><p className="progresspresentageyoutube">68% </p>
                        </div>
                    </div>
                    <div className="performance">
                        <div>
                            <div className="performancetext"><p>Latest post performance</p></div>
                            <div className="performancecounts">
                                <div className="performancecountsbox"><div className="performancecountimages twittimage1"></div><h3>1 M</h3><p>Followers</p></div>
                                <div className="performancecountsbox"><div className="performancecountimages youimage2"></div><h3>100 k</h3><p>Views</p></div>
                                <div className="performancecountsbox"><div className="performancecountimages youimage3"></div><h3>4.8 k</h3><p>Videos</p></div>
                                <div className="performancecountsbox"><div href="#" className="performancecountimages image4"></div><h3 className="highrate">62.15%</h3><p className="high">Engagment rate</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="trafficsection">
                        <div>
                            <div className="traffictext"><p>Website traffic from Youtube</p></div>
                            <div className="trafficdetailssection">
                                <div className="traffictextcounts"><div className="trafficsession"><div className="trafficsessions">95.5 k</div><h4>Sessions</h4><div><div className="sessionperentage"><div className="upimage"></div>78%<p>vs last month</p></div></div></div></div>
                                <div className="trafficchart"> <div className="line-chart">
                                    <div className='grafico'>
                                        <ul className='eje-y'>
                                            <li data-ejey='200k'></li>
                                            <li data-ejey='20 k'></li>
                                            <li data-ejey='2 k'></li>
                                            <li data-ejey='0'></li>
                                        </ul>
                                        <ul className='eje-x'>
                                            <li>6 Apr</li>
                                            <li>13 May</li>
                                            <li>20 Jun</li>
                                        </ul>
                                        <span data-valor='25'>
                                            <span data-valor='8'>
                                                <span data-valor='13'>
                                                    <span data-valor='5'>
                                                        <span data-valor='23'>
                                                            <span data-valor='12'>
                                                                <span data-valor='15'>
                                                                </span></span></span></span></span></span></span>
                                    </div>

                                </div></div>
                            </div>
                        </div>
                    </div>
                    <div className="revenuesection">
                        <div className="revenuesectionviewyoutube">
                           
                                <div className="videocontaner">
                                    {videos.map((video) => (
                                        <div className="videocard" key={video.id.videoId}>
                                            <div>
                                                <img src={video.snippet.thumbnails.default.url} alt="Video Thumbnail" className="videoimage" />
                                            </div>
                                            <div className="videotitile">
                                                <h3>{video.snippet.title}</h3>
                                                <p>{video.snippet.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                        </div>
                    </div>
                </div>
            )}

            {activeSocialMedia === 'youtube' && (
                <div className="profilecard">
                    <div className="socialmedialogoinsta">
                        <div className="Channelname">{channelData && channelData.snippet.title}</div>

                        {channelData && channelData.snippet && channelData.snippet.thumbnails && (
                            <img src={channelData.snippet.thumbnails.default.url} alt="channellogo" className="youtubelogomain" />
                        )}

                        <div className="youtubemaincardsub">
                            <div className="followercount"><p className="count">{channelData && formatNumber(parseInt(channelData.statistics.subscriberCount))}</p></div>
                            <div className="followercountname"><p>Subscribers</p></div>
                            <progress className="youtubeprogressbar" id="file" value="80" max="100"></progress><p className="progresspresentageyoutube">90% </p>
                        </div>
                    </div>
                    <div className="performance">
                        <div>
                            <div className="performancetext"><p>Latest post performance</p></div>
                            <div className="performancecounts">
                                <div className="performancecountsbox"><div className="performancecountimages youimage1"></div><h3>{channelData && formatNumber(parseInt(channelData.statistics.subscriberCount))}</h3><p>Subscribers</p></div>
                                <div className="performancecountsbox"><div className="performancecountimages youimage2"></div><h3>{channelData && formatNumber(parseInt(channelData.statistics.viewCount))}</h3><p>Views</p></div>
                                <div className="performancecountsbox"><div className="performancecountimages youimage3"></div><h3>{channelData && formatNumber(parseInt(channelData.statistics.videoCount))}</h3><p>Videos</p></div>
                                <div className="performancecountsbox"><div href="#" className="performancecountimages image4"></div><h3 className="highrate">80.11%</h3><p className="high">Engagment rate</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="trafficsection">
                        <div>
                            <div className="traffictext"><p>Website traffic from Youtube</p></div>
                            <div className="trafficdetailssection">
                                <div className="traffictextcounts"><div className="trafficsession"><div className="trafficsessions">135.5 k</div><h4>Sessions</h4><div><div className="sessionperentage"><div className="upimage"></div>78%<p>vs last month</p></div></div></div></div>
                                <div className="trafficchart"> <div className="line-chart">
                                    <div className='grafico'>
                                        <ul className='eje-y'>
                                            <li data-ejey='200k'></li>
                                            <li data-ejey='20 k'></li>
                                            <li data-ejey='2 k'></li>
                                            <li data-ejey='0'></li>
                                        </ul>
                                        <ul className='eje-x'>
                                            <li>6 Apr</li>
                                            <li>13 May</li>
                                            <li>20 Jun</li>
                                        </ul>
                                        <span data-valor='25'>
                                            <span data-valor='8'>
                                                <span data-valor='13'>
                                                    <span data-valor='5'>
                                                        <span data-valor='23'>
                                                            <span data-valor='12'>
                                                                <span data-valor='15'>
                                                                </span></span></span></span></span></span></span>
                                    </div>

                                </div></div>
                            </div>
                        </div>
                    </div>
                    <div className="revenuesection">
                        <div className="revenuesectionviewyoutube">
                           
                                <div className="videocontaner">
                                    {videos.map((video) => (
                                        <div className="videocard" key={video.id.videoId}>
                                            <div>
                                                <img src={video.snippet.thumbnails.default.url} alt="Video Thumbnail" className="videoimage" />
                                            </div>
                                            <div className="videotitile">
                                                <h3>{video.snippet.title}</h3>
                                                <p>{video.snippet.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                        </div>
                    </div>
                </div>
            )}

{activeSocialMedia === 'twitter' && (
                <div className="profilecard">
                    <div className="socialmedialogoinsta">
                        <div className="Channelname">{channelData && channelData.snippet.title}</div>
                        {channelData && channelData.snippet && channelData.snippet.thumbnails && (
                            <img src={channelData.snippet.thumbnails.default.url} alt="channellogo" className="youtubelogomain" />
                        )}
                        <div className="youtubemaincardsub">
                            <div className="followercount"><p className="count">19.9 k</p></div>
                            <div className="followercountname"><p>Followers</p></div>
                            <progress className="youtubeprogressbar" id="file" value="30" max="100"></progress><p className="progresspresentageyoutube">30% </p>
                        </div>
                    </div>
                    <div className="performance">
                        <div>
                            <div className="performancetext"><p>Latest post performance</p></div>
                            <div className="performancecounts">
                                <div className="performancecountsbox"><div className="performancecountimages twittimage1"></div><h3>194</h3><p>Following</p></div>
                                <div className="performancecountsbox"><div className="performancecountimages twittimage2"></div><h3>4533</h3><p>Posts</p></div>
                                <div className="performancecountsbox"><div className="performancecountimages twittimage3"></div><h3>1 k</h3><p>Videos</p></div>
                                <div className="performancecountsbox"><div href="#" className="performancecountimages image4"></div><h3 className="highrate">48.25%</h3><p className="high">Engagment rate</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="trafficsection">
                        <div>
                            <div className="traffictext"><p>Website traffic from Youtube</p></div>
                            <div className="trafficdetailssection">
                                <div className="traffictextcounts"><div className="trafficsession"><div className="trafficsessions">85.6 k</div><h4>Sessions</h4><div><div className="sessionperentage"><div className="upimage"></div>48%<p>vs last month</p></div></div></div></div>
                                <div className="trafficchart"> <div className="line-chart">
                                    <div className='grafico'>
                                        <ul className='eje-y'>
                                            <li data-ejey='200k'></li>
                                            <li data-ejey='20 k'></li>
                                            <li data-ejey='2 k'></li>
                                            <li data-ejey='0'></li>
                                        </ul>
                                        <ul className='eje-x'>
                                            <li>6 Apr</li>
                                            <li>13 May</li>
                                            <li>20 Jun</li>
                                        </ul>
                                        <span data-valor='25'>
                                            <span data-valor='8'>
                                                <span data-valor='13'>
                                                    <span data-valor='5'>
                                                        <span data-valor='23'>
                                                            <span data-valor='12'>
                                                                <span data-valor='15'>
                                                                </span></span></span></span></span></span></span>
                                    </div>

                                </div></div>
                            </div>
                        </div>
                    </div>
                    <div className="revenuesection">
                        <div className="revenuesectionviewyoutube">
                           
                                <div className="videocontaner">
                                    {videos.map((video) => (
                                        <div className="videocard" key={video.id.videoId}>
                                            <div>
                                                <img src={video.snippet.thumbnails.default.url} alt="Video Thumbnail" className="videoimage" />
                                            </div>
                                            <div className="videotitile">
                                                <h3>{video.snippet.title}</h3>
                                                <p>{video.snippet.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Mainbody