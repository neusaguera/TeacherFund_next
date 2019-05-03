import Nav from '../components/nav'
import Head from '../components/head'

export default (props) => {
  return (
    <div className='bg-white index tf-dark-gray'>
      <Head />
      <section className='index__nav'>
        <Nav />
      </section>
      <section className='index__header h-section pv7 pr7'>
        <div className='fr flex flex-column'>
          <div className='tf-dark-gray ts-title tf-oswald fl'>
            Funding Teachers.<br />
            Empowering Students.
          </div>
          <div className='ts-subtext fl tf-lato tf-dark-gray'>
            <p>We provide funding to classrooms so teachers don't have to.</p>
          </div>
        </div>
      </section>
      <section className='h-section pt6'>
        <div className='tf-lato-lite ts-subtext w-auto m-auto center tc'>
          <p className='ma1'>We believe that by providing funding to public school</p>
          <p className='ma1'>teachers, we can support exemplary teaching, increase</p>
          <p className='ma1'>retention, and impact student success.</p>
        </div>
        <div className='w-70 ba bw1 mh-auto mt5 border-tf-teal white'>
          <div className='flex flex-row w-94 bg-tf-teal tf-lato-lite pv4 ph4'>
            <div className='mv-auto fl ph1 ts-title w4'>
              94%
            </div>
            <div className='m-auto tf-lato ts-subtext'>
              of public school teachers spend their own money on school supplies
            </div>
          </div>
        </div>
        <div className='w-70 ba bw1 mh-auto mt3 border-tf-pink white bg-tf-pink'>
          <div className='flex flex-row w-94 tf-lato-lite pv4 ph4'>
            <div className='mv-auto fl ph1 ts-title w4'>
             100%
            </div>
            <div className='m-auto tf-lato ts-subtext'>
              of your donation goes to providing resources for classrooms in need.
            </div>
          </div>
        </div>
      </section>
      <section className='h-section'>
        <div className='bg-tf-gray o-10 h-section w-100 absolute' />
        <div className='w-100 flex pa4'>
          <div className='bg-white o-80 w6 mt7 ml6 flex flex-column pa4 z-1'>
            <div className='pa2'>
              <div className='tf-oswald o-100 ts-title pv2'>
                What We Provide
              </div>
              <div className='tf-lato-lite ts-subtext'>
                We support teachers in need of everything from the most basic of
                classroom supplies to extracurricular and after-school funding and equipment.
              </div>
            </div>
          </div>
          <div className='ma5 index__provide i-contain absolute' />
        </div>
      </section>
      <section className='h-section'>
        <div className='flex flex-column mt5'>
          <div className='ts-title tf-oswald center'>
            Our Process
          </div>
          <div className='flex flex-row flex-auto justify-center w-auto mt5 center'>
            <div className='ma4 w-50-m w-25-l w-80'>
              <div className='bg-tf-gray o-10 absolute w-50-m w-25-l w-80 h5-5' />
              <div className='w-100 bg-transparent pa2 pt4'>
                <div className='pa2 tc'>
                  <div className='center br-100 pa4 ba b--black-05 ma3 h4 w4 bg-white'>
                    <img src='/static/images/Mortarboard_icon.png' class='i-contain' title='Icon of graduation cap' />
                  </div>
                  <div className='tf-oswald ts-subtext pv2 tc'>
                    Quality Teachers
                  </div>
                  <div className='tf-lato-lite ts-subtext pt2 tc'>
                    We support teachers in need of everything from the most basic of
                    classroom supplies to extracurricular and after-school funding and equipment.
                  </div>
                </div>
              </div>
            </div>
            <div className='ma4 w-50-m w-25-l w-80'>
              <div className='bg-tf-gray o-10 absolute w-50-m w-25-l w-80 h5-5' />
              <div className='w-100 bg-transparent pa2 pt4'>
                <div className='pa2 tc'>
                  <div className='center br-100 pa4 ba b--black-05 ma3 h4 w4 bg-white'>
                    <img src='/static/images/School_icon.png' class='i-contain' title='Icon of school' />
                  </div>
                  <div className='tf-oswald ts-subtext pv2 tc'>
                    Local Schools
                  </div>
                  <div className='tf-lato-lite ts-subtext pt2 tc'>
                    Partnering with nearby schools ensures we are providing exactly what
                    their teachers and students need.
                  </div>
                </div>
              </div>
            </div>
            <div className='ma4 w-50-m w-25-l w-80'>
              <div className='bg-tf-gray o-10 absolute w-50-m w-25-l w-80 h5-5' />
              <div className='w-100 bg-transparent pa2 pt4'>
                <div className='pa2 tc'>
                  <div className='center br-100 pa4 ba b--black-05 ma3 h4 w4 bg-white'>
                    <img src='/static/images/Hand_icon.png' class='i-contain' title='Icon of hand holding money cap' />
                  </div>
                  <div className='tf-oswald ts-subtext pv2 tc'>
                    Tangible Impact
                  </div>
                  <div className='tf-lato-lite ts-subtext pt2 tc'>
                    We monitor each dollar donated so you can see the direct
                    impact your donation has on these classrooms.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='h-section bg-tf-teal'>
        <div className='flex flex-column pt5'>
          <div className='ts-title tf-oswald white center'>
            See How We're Doing
          </div>
          <div className='center pt5 flex flex-column'>
            <div className='flex flex-row'>
              <div className='w5 h4 ma3 bg-white bl bw3 border-tf-yellow'>
                <div className='flex flex-column tf-dark-gray pt3'>
                  <div className='tf-lato ts-title center'>
                    $10,000
                  </div>
                  <div className='pt2 tf-lato-lite ts-subtext center'>
                    Raised
                  </div>
                </div>
              </div>
              <div className='w5 h4 ma3 bg-white bl bw3 border-tf-pink'>
                <div className='flex flex-column tf-dark-gray pt3'>
                  <div className='tf-lato ts-title center'>
                    0
                  </div>
                  <div className='pt2 tf-lato-lite ts-subtext center'>
                    Teachers Funded
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-row'>
              <div className='w5 h4 ma3 bg-white bl bw3 border-tf-dark-gray'>
                <div className='flex flex-column tf-dark-gray pt3'>
                  <div className='tf-lato ts-title center'>
                    17
                  </div>
                  <div className='pt2 tf-lato-lite ts-subtext center'>
                    Partner Schools
                  </div>
                </div>
              </div>
              <div className='w5 h4 ma3 bg-white bl bw3 border-tf-gray'>
                <div className='flex flex-column tf-dark-gray pt3'>
                  <div className='tf-lato ts-title center'>
                    1200
                  </div>
                  <div className='pt2 tf-lato-lite ts-subtext center'>
                    Students Impacted
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='h-section'>
        <div className='flex flex-column pt5'>
          <div className='ts-title tf-oswald center'>
            Get Involved
          </div>
          <div className='flex flex-row flex-auto justify-center w-auto mt5 center'>
            <div className='ma4 w-50-m w-33-l w-80'>
              <div className='bg-tf-gray o-10 absolute w-50-m w-33-l w-80 h5-5' />
              <div className='w-100 bg-transparent pa2 pt4'>
                <div className='pa2 tc'>
                  <div className='center br-100 pa4 ba b--black-05 ma3 h4 w4 bg-white'>
                    <img src='/static/images/Mortarboard_icon.png' class='i-contain' title='Icon of graduation cap' />
                  </div>
                  <div className='tf-oswald ts-subtext pv2 tc'>
                    Joel Wasserman
                  </div>
                  <div className='tf-lato-lite ts-subtext pt2 tc'>
                    We support teachers in need of everything from the most basic of
                    classroom supplies to extracurricular and after-school funding and equipment.
                  </div>
                </div>
              </div>
            </div>
            <div className='ma4 w-50-m w-33-l w-80'>
              <div className='bg-tf-gray o-10 absolute w-50-m w-33-l w-80 h5-5' />
              <div className='w-100 bg-transparent pa2 pt4'>
                <div className='pa2 tc'>
                  <div className='center br-100 pa4 ba b--black-05 ma3 h4 w4 bg-white'>
                    <img src='/static/images/Hand_icon.png' class='i-contain' title='Icon of hand holding money cap' />
                  </div>
                  <div className='tf-oswald ts-subtext pv2 tc'>
                    Peter Squicciarini
                  </div>
                  <div className='tf-lato-lite ts-subtext pt2 tc'>
                    We monitor each dollar donated so you can see the direct
                    impact your donation has on these classrooms.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='h-section'>
        <div className='flex flex-column z-100'>
          <div className='bg-tf-gray o-10 h-section w-100 absolute' />
          <div className='ts-title tf-oswald pt5 center'>
            Meet the Team
          </div>
          <div className='flex flex-row flex-auto justify-center w-auto mt3 center'>
            <div className='bg-white z-1 ma4 w-50-m w-25-l w-80'>
              <div className='o-10 absolute w-50-m w-25-l w-80 h5-5' />
              <div className='w-100 bg-transparent pa2 pt3'>
                <div className='pa2 tc'>
                  <div className='center br-100 pa4 ba b--black-05 ma3 h4 w4 bg-white'>
                    <img src='/static/images/Mortarboard_icon.png' class='i-contain' title='Icon of graduation cap' />
                  </div>
                  <div className='tf-oswald ts-subtext pv2 tc'>
                    Joel Wasserman
                  </div>
                  <div className='tf-lato-lite ts-subtext pt2 tc'>
                    A software engineer at Google, Joel formerly worked
                    at two education startups and is passionate about public education and technology.
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white z-1  ma4 w-50-m w-25-l w-80'>
              <div className='o-10 absolute w-50-m w-25-l w-80 h5-5' />
              <div className='w-100 bg-transparent pa2 pt3'>
                <div className='pa2 tc'>
                  <div className='center br-100 pa4 ba b--black-05 ma3 h4 w4 bg-white'>
                    <img src='/static/images/School_icon.png' class='i-contain' title='Icon of school' />
                  </div>
                  <div className='tf-oswald ts-subtext pv2 tc'>
                    Christine Woeller
                  </div>
                  <div className='tf-lato-lite ts-subtext pt2 tc'>
                    With a degree in secondary education, Christine seeks to improve public schools
                    and ensure teachers have the best resources available.
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white z-1  ma4 w-50-m w-25-l w-80'>
              <div className='o-10 absolute w-50-m w-25-l w-80 h5-5' />
              <div className='w-100 bg-transparent pa2 pt3'>
                <div className='pa2 tc'>
                  <div className='center br-100 pa4 ba b--black-05 ma3 h4 w4 bg-white'>
                    <img src='/static/images/Hand_icon.png' class='i-contain' title='Icon of hand holding money cap' />
                  </div>
                  <div className='tf-oswald ts-subtext pv2 tc'>
                    Peter Squicciarini
                  </div>
                  <div className='tf-lato-lite ts-subtext pt2 tc'>
                    A software developer at Amazon and loving father of two, Peter strives to
                    help all children and teachers succeed in an educational environment.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='h-footer bg-tf-dark-gray'>
        Footer
      </section>
    </div>
  )
}
