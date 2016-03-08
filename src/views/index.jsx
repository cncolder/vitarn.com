import Layout from './layout'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import __ from '../lib/i18n'


export default class extends React.Component {
  render() {
    return (
      <Layout>

        <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            {/*Brand and toggle get grouped for better mobile display*/}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">{ __('Toggle navigation') }</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand page-scroll" href="#page-top">{ __('ViTarn') }</a>
            </div>

            {/*Collect the nav links, forms, and other content for toggling*/}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li>
                  <a className="page-scroll" href="/web">{ __('Web design') }</a>
                </li>
                <li>
                  <a className="page-scroll" href="/wechat">{ __('Wechat platform') }</a>
                </li>
                <li>
                  <a className="page-scroll" href="/app">{ __('App develop') }</a>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a className="page-scroll" href="#about">{ __('About') }</a>
                </li>
                <li>
                  <a className="page-scroll" href="#services">{ __('Services') }</a>
                </li>
                <li>
                  <a className="page-scroll" href="#portfolio">{ __('Portfolio') }</a>
                </li>
                <li>
                  <a className="page-scroll" href="#contact">{ __('Contact') }</a>
                </li>
              </ul>
            </div>
            {/*/.navbar-collapse*/}
          </div>
          {/*/.container-fluid*/}
        </nav>

        <header style={{ backgroundImage: "url('../img/header.jpg')" }}>
          <div className="header-content">
            <div className="header-content-inner">
              <h1>{ __('Make science and technology more simple') }</h1>
              <hr />
              <p>{ __('Information technology will be anytime, anywhere in the future. Like the air.') }</p>
              <a href="#about" className="btn btn-primary btn-xl page-scroll">{ __('Find Out More') }</a>
            </div>
          </div>
        </header>

        <section className="bg-primary" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 text-center">
                <h2 className="section-heading">{ __('We\'ve got what you need!') }</h2>
                <hr className="light" />
                <p className="text-faded">{ __('We can help you build better website, manage sns network.') }</p>
                <a href="#services" className="btn btn-default btn-xl page-scroll">{ __('Get Started!') }</a>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">{ __('At Your Service') }</h2>
                <hr className="primary" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box">
                  <i className="fa fa-4x fa-diamond wow bounceIn text-primary"></i>
                  <h3>{ __('Remarkable Quality') }</h3>
                  <p className="text-muted">{ __('We are all OCD-like young people. We are more focus on quality than you.') }</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box">
                  <i className="fa fa-4x fa-paper-plane wow bounceIn text-primary" data-wow-delay=".1s"></i>
                  <h3>{ __('Ready to Ship') }</h3>
                  <p className="text-muted">{ __('You can join our design and development process to see what happened about your product.') }</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box">
                  <i className="fa fa-4x fa-newspaper-o wow bounceIn text-primary" data-wow-delay=".2s"></i>
                  <h3>{ __('Up to Date') }</h3>
                  <p className="text-muted">{ __('We update dependencies to keep things fresh.') }</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box">
                  <i className="fa fa-4x fa-heart wow bounceIn text-primary" data-wow-delay=".3s"></i>
                  <h3>{ __('Made with Love') }</h3>
                  <p className="text-muted">{ __('We have to make your products with love these days!') }</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="no-padding" id="portfolio">
          <div className="container-fluid">
            <div className="row no-gutter">
              <div className="col-lg-4 col-sm-6">
                <a href="http://bao--bao.com" target="_blank" className="portfolio-box">
                  <img src="img/portfolio/bao--bao.com.jpg" className="img-responsive" alt="" />
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        { __('Web design') }
                      </div>
                      <div className="project-name">
                        { __('Bao Bao') }
                      </div>
                    </div>
                    <div className="qrcode" data-qrtext="http://bao--bao.com"></div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a href="http://haoduotongshu.com" target="_blank" className="portfolio-box">
                  <img src="img/portfolio/haoduotongshu.com.jpg" className="img-responsive" alt="" />
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        { __('Web design') }
                      </div>
                      <div className="project-name">
                        { __('Hao Duo Tong Shu') }
                      </div>
                    </div>
                    <div className="qrcode" data-qrtext="http://haoduotongshu.com"></div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a href="http://kdt.im/09kxHKmEj" target="_blank" className="portfolio-box">
                  <img src="img/portfolio/haoduotongshu-youzan.jpg" className="img-responsive" alt="" />
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        { __('Wechat shop') }
                      </div>
                      <div className="project-name">
                        { __('Hao Duo Tong Shu') }
                      </div>
                    </div>
                    <div className="qrcode" data-qrtext="http://kdt.im/09kxHKmEj"></div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a href="http://haoduotongshu.com/poll/outlets" target="_blank" className="portfolio-box">
                  <img src="img/portfolio/i-love-the-blue-sky.jpg" className="img-responsive" alt="" />
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        { __('Event') }
                      </div>
                      <div className="project-name">
                        { __('"I love the blue sky" children drawings poll') }
                      </div>
                    </div>
                    <div className="qrcode" data-qrtext="http://haoduotongshu.com/poll/outlets"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <aside className="bg-dark">
          <div className="container text-center">
            <div className="call-to-action">
              <h2>{ __('We make more cool projects everydays.') }</h2>
              {/*<a href="#" className="btn btn-default btn-xl wow tada">{ __('') }</a>*/}
            </div>
          </div>
        </aside>

        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 text-center">
                <h2 className="section-heading">{ __('Let\'s Get In Touch!') }</h2>
                <hr className="primary" />
                <p>{ __('Ready to start your next project with us? That\'s great! Give us a call or send us an email and we will get back to you as soon as possible!') }</p>
              </div>
              <div className="col-lg-4 col-lg-offset-2 text-center">
                <i className="fa fa-phone fa-3x wow bounceIn"></i>
                <p><a href="tel:123-4567-8900">123-4567-8900</a></p>
              </div>
              <div className="col-lg-4 text-center">
                <i className="fa fa-envelope-o fa-3x wow bounceIn" data-wow-delay=".1s"></i>
                <p><a href="mailto:feedback@vitarn.com">feedback@vitarn.com</a></p>
              </div>
            </div>
          </div>
        </section>

        <aside className="bg-dark">
          <div className="container text-center">
            <div className="call-to-action">
              <p>
                Copyright 2015 ViTarn.com
              </p>
            </div>
          </div>
        </aside>

      </Layout>
    )
  }
}
