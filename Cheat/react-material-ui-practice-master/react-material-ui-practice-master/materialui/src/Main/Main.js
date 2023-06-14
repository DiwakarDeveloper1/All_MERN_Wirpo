import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Main.css';

export default function Main() {

    return (
        <div className="container mainbar">
            <div className="row">
                <div className="col sub">
                    <h6>SUBSCRIBE</h6>
                </div>
                <div className="col blog">
                    <h4>BLOG</h4>
                </div>
                <div className="col search">
                    <span className="material-symbols-outlined icon">
                        search
                    </span>
                    <Button variant="outlined" size="small">
                        <h6 className='sign'>SIGN UP</h6>
                    </Button>
                </div>
            </div>
            <hr></hr>
            <div>
                <ul className='navbar data'>
                    <li><a href="#">Technology</a></li>
                    <li><a href="#">Design</a></li>
                    <li><a href="#">Culture</a></li>
                    <li><a href="#">Business</a></li>
                    <li><a href="#">Politics</a></li>
                    <li><a href="#">Opinion</a></li>
                    <li><a href="#">Science</a></li>
                    <li><a href="#">Health</a></li>
                    <li><a href="#">Style</a></li>
                    <li><a href="#">Travel</a></li>
                </ul>
            </div>
            <img className="img1" src="images/banner1.png" />
            <div className='posts'>
                <div className="row">
                    <div className="col">
                        <Card sx={{ display: 'flex' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        Featured Post
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        <p>12 Nov</p>
                                        <p className='para'>This is a wider card with supporting text below as a natural lead-in additional content.</p>
                                    </Typography>
                                    <Button variant="text">Continue Reading...</Button>
                                </CardContent>

                            </Box>
                            <div className='image1'>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 140, height: 255 }}
                                    image="images/img2.jpg"
                                    alt="Live from space album cover"
                                />
                            </div>
                        </Card>
                    </div>
                    <div className="col">
                        <Card sx={{ display: 'flex' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        Post Title
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        <p>12 Nov</p>
                                        <p className='para'>This is a wider card with supporting text below as a natural lead-in additional content.</p>
                                    </Typography>
                                    <Button variant="text">Continue Reading...</Button>
                                </CardContent>

                            </Box>
                            <div className='image1'>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 140, height: 255 }}
                                    image="images/img2.jpg"
                                    alt="Live from space album cover"
                                />
                            </div>

                        </Card>
                    </div>
                </div>
            </div>

            <div className="row mainbody">
                <div className="col-7 sm-12 leftbody">
                    <h4>From the firehose</h4>
                    <hr></hr>
                    <h1>Sample blog post</h1>
                    <i><p>April 1, 2020 by <a href="#">Olivier</a></p></i>
                    <p>This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, Images, and code are all supported. You can extend these by modifying Markdown.js.</p>
                    <p>Cum socis natoque penatibus et magns dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam Pellentesque ornare sem lacinia quen natis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus alt amet fermentum.</p>
                    <p>Curabitur blandit tempus portator. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor
                        id nibh ultricies vehicula ut id el</p>
                    <p>Enem porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis molls, est non commodo</p>
                    <h4>Heading</h4>
                    <p>luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,vestibulum at eros</p>
                    <h6>Sub-Heading 1</h6>
                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <h6>Sub-Heading 2</h6>
                    <p>
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    <div>
                        <h1>New feature</h1>
                        <i><p>March 14, 2020 by <a href="#">Tom</a></p></i>
                        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                        <ul>
                            <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                            <li>Donec id elit non mi porta gravida at eget metus.</li>
                            <li>Nulla vitae elit libero, a pharetra augue.</li>
                        </ul>
                        <p>Enam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.Aenean lacinia bibendum nulla sed consectetur.</p>
                        <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue</p>
                    </div>

                </div>
                <div className="col-4 sm-12 rightbody">
                    <div className='carding'>
                        <h4>About</h4>
                        <p>
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, ac cursus</p>
                    </div>
                    <div className='items'>
                        <h4>Archives</h4>

                    </div>
                    <div>
                        <table>
                            <tr>
                                <td><a href="#">March 2020</a></td>
                            </tr>
                            <tr>
                                <td><a href="#">February 2020</a></td>
                            </tr>
                            <tr>
                                <td><a href="#">January 2020</a></td>
                            </tr>
                            <tr>
                                <td><a href="#">November 1999</a></td>
                            </tr>
                            <tr>
                                <td><a href="#">October 1999</a></td>
                            </tr>
                            <tr>
                                <td><a href="#">September 1999</a></td>
                            </tr>
                            <tr>
                                <td><a href="#">August 1999</a></td>
                            </tr>
                            <tr>
                                <td><a href="#">July 1999</a></td>
                            </tr>

                            <tr>
                                <td><a href="#">June 1999</a></td>
                            </tr>
                            <tr>
                                <td><a href="#">May 1999</a></td>
                            </tr>
                            <tr>
                                <td><a href="#">April 1999</a></td>
                            </tr>
                        </table>
                    </div>
                    <div className='items'>
                        <h4>Social</h4>
                    </div>
                    <div>
                        <table>
                            <tr>
                                <td><img src="images/github.png" /><a href="#">Github</a></td>
                            </tr>
                            <tr>
                                <td><img src="images/Twitter.png" /><a href="#">Twitter</a></td>
                            </tr>
                            <tr>
                                <td><img src="images/fb.png" /><a href="#">Facebook</a></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <footer>
                <div class="footer-content">
                    <h4>Footer</h4>
                    <p>Something are to give the footer a purpose! Copyright &copy; <u>Your Website</u> 2022</p>
                </div>
            </footer>
        </div>
    )
}
