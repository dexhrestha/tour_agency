import React, { Component } from 'react';
import {Footer, Section, Banner, Article, GalleryItem, Contact} from './components';


class App extends Component {
  render() {
    return (
     
      <div id="wrapper" className="divided">
       
          <Banner title="Title" description="description"/>

          <Section  orient="orient-right" title ="Header 1" description="description here"/>
          <Section orient="orient-left" title ="Header 2" description="description here"/>
          <Section orient="orient-right"  title ="Header 3" description="description here"/>


          <section className="wrapper style1 align-center">
            <div className="inner">
              <h2>Massa sed condimentum</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum.</p>
            </div>

              <div className="gallery style2 medium lightbox onscroll-fade-in">
               
                <Article title="Title" description="description" />
                <Article title="Title" description="description" />
                <Article title="Title" description="description" />
                <Article title="Title" description="description" />
                <Article title="Title" description="description" />

               
              </div>

          </section>

          <section className="wrapper style1 align-center">
            <div className="inner">
              <h2>Ipsum sed consequat</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum.</p>
              <div className="items style1 medium onscroll-fade-in">
                <GalleryItem icon ="fa-save" title="Title" description="description"/>
                <GalleryItem icon ="fa-save" title="Title" description="description"/>
                <GalleryItem icon ="fa-save" title="Title" description="description"/>
                <GalleryItem icon ="fa-save" title="Title" description="description"/>
                <GalleryItem icon ="fa-save" title="Title" description="description"/>
                <GalleryItem icon ="fa-save" title="Title" description="description"/>

                
              </div>
            </div>
          </section>
          <Contact />
          <Footer />
         
      </div>
     
    );
  }
}

export default App;
