// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import axios from "axios";
// // import PropTypes from 'prop-types';

// import {
//   UserActionCreator,
// } from '../../actions';
// import {
//   Profile,
//   Section,
//   PastMeetup,
// } from '../../components/organisms';
// import {
//   SectionContent,
// } from '../../components/molecules';
// import {
//   SectionTitle,
// } from '../../components/atoms';

// import './style.css';

// const mapStateToProps = (state) => {
//   return {
//     members: state.user,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchData: () => dispatch(UserActionCreator.fetchData()),
//     register: (data) => dispatch(UserActionCreator.register(data)),
//     login: (data) => dispatch(UserActionCreator.login(data)),
//     logout: () => dispatch(UserActionCreator.logout()),
//   };
// };

// class Home extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       tanggal: new Date().toString(),
//       info: {
//         location: 'Jakarta, Indonesia',
//         date: '29 January 2019',
//         numberOfMembers: '1078',
//         headOrganizer: 'Hacktiv8',
//         memberOrganizer: 'Best, Twinky, Winky, Dipsy, Lala, Poh. JakartaJS Organizer.',
//       },
//       twitter: '@JakartaJS',
//       hashTag: '#jakartajs',
//       meetups: [
//         {
//           id: 39,
//           date: '27 November 2017',
//           topic: 'JakartaJS with kumparan',
//           participants: '139'
//         },
//         {
//           id: 40,
//           date: '27 September 2017',
//           topic: 'JakartaJS with bibli',
//           participants: '239'
//         },
//         {
//           id: 41,
//           date: '27 October 2017',
//           topic: 'JakartaJS with Hacktiv8',
//           participants: '39'
//         }
//       ],
//       members: [],
//       user: {
//         name: '',
//         email: '',
//       },
//       resultUser: ''
//     };
//   };

//   componentDidMount() {
//     // axios
//     // .get("https://randomuser.me/api/?results=5")
//     // .then(response => {
//     //   this.setState({
//     //     members: response.data.results,
//     //   })
//     // });
//     //
//     // this.props.fetchData();

//     const userData = localStorage.getItem('user');

//     console.log('localStorage userData', userData);

//     if (userData) {
//       this.setState({ user: JSON.parse(userData) });
//     };
//   };

//   onClickLogin = (data) => {
//     this.props.login({
//       name: 'fadly',
//       email: 'fadly.kayo@gmail.com',
//     });
//   };

//   onClickLogout = () => {
//     this.props.logout();
//   };

//   onChangeText = (dynamicKey) => (event) => {
//     let user = {...this.state.user};

//     user[dynamicKey] = event.target.value;
//     // [dynamicKey]: event.target.value,

//     this.setState({user});
//   };

//   handlePost() {
//     axios
//     .post("http://localhost:4000/daftarNama", {
//       "user": {
//         "name": this.state.user.name,
//         "email": this.state.user.email,
//       }
//     })
//     .then(response => {
//       this.setState({resultUser: response.data.user})
//     });
//   };

//   render() {
//     console.log('ini state members', this.state.members);
//     console.log('ini state user', this.state.user);
//     console.log('ini props reducer members', this.props.members);
//     console.log('ini props reducer members.user', this.props.members.user);
//     return (
//       <div className="body">

//         <Profile
//           classNameSection={'section_right'}
//           classNameInfo={'row_right_info_content'}
//           leftList={['Location', 'Members', 'Organizer']}
//           rightList={[this.state.info.location, this.state.info.numberOfMembers, this.state.info.headOrganizer]}
//           title={'Hacktiv8 Meetup'}
//           button
//           onClick={this.onClickLogin}
//         />

//         <Section>

//           <SectionTitle title={'Next Meetup'}/>

//           <SectionContent className="section_content_column_grey">
//             <h4 style={{marginTop: 0, marginBottom: 10,}}>Awesome meetup and event</h4>
//             <div>{this.state.info.date}</div>
//               <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
//               <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
//               <div>It has survived not only five centuries, but also the leap into electronic typesetting.</div>
//               <div>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</div>
//             <div>Lorem Ipsum is simply dummy text of the printing.</div>
//             <p>See you there!</p>
//             <p>{this.state.info.memberOrganizer}</p>
//           </SectionContent>
//         </Section>
//         <Section>
//           <SectionTitle title={'About Meetup'}/>
//           <SectionContent className="section_content_column_white">
//             <div style={{marginBottom: 15,}}>Come and meet other developers interested in Javascript and it's library in Greater Jakarta area.</div>
//             <div>Twitter {this.state.twitter} and we use hashtag #jakartajs</div>
//           </SectionContent>

//         </Section>

//         <Section>

//           <SectionTitle title={'Members'}/>

//           <Profile
//             classNameSection={'section_right_alt'}
//             classNameInfo={'row_right_info_content_alt'}
//             leftList={['Fadly Kayo']}
//             rightList={['4 others']}
//             title={'Organizers'}
//             circleThumbnail
//           />

//         </Section>

//         <PastMeetup
//           meetups = {this.state.meetups}
//         />

//       </div>
//     );
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React, { Component } from 'react';
import axios from "axios";

import NavbarQTemu from '../../components/organisms/NavbarQTemu';
import Header from '../../components/organisms/Header';
import NextMeetup from '../../components/organisms/NextMeetup';
import AboutMeetup from '../../components/organisms/AboutMeetup';
import Members from '../../components/organisms/Members';
import PastMeetup from '../../components/organisms/PastMeetup';
import Footer from '../../components/organisms/Footer';

import "./style.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      meetup: {
        image: 'https://via.placeholder.com/500x500',
        title: 'Hacktiv8 Meetup',
        location: 'Jakarta, Indonesia',
        totalMembers: 1078,
        organizer: 'Adhy Wiranata',
      },
      invitation: {
        title: 'Awesome Meetup',
        date: new Date().toString(),
        greetings: 'Hello JavaScript & NodeJS Ninjas!',
        text: 'Get ready for our monthly meetup JakartaJS! ..... See you there! ',
        organizer: 'Best Hengki, Sofian - The JakartaJS Organizers'
      },
      profile: {
        twitter: '@JakartaJS',
        hashtag: '#jakartajs'
      },
      member: [
        {
          imageProfile: 'https://3ek9gx368g2n28ygtw3vknmg-wpengine.netdna-ssl.com/wp-content/uploads/sites/4/2015/10/placeholder-circle-1.png',
          name: 'Adhy Wiranata',
          memberType: 'Organizer'
        },
        {
          imageProfile: 'https://3ek9gx368g2n28ygtw3vknmg-wpengine.netdna-ssl.com/wp-content/uploads/sites/4/2015/10/placeholder-circle-1.png',
          name: 'Bobby Wiranata',
          memberType: 'Member'
        },
        {
          imageProfile: 'https://3ek9gx368g2n28ygtw3vknmg-wpengine.netdna-ssl.com/wp-content/uploads/sites/4/2015/10/placeholder-circle-1.png',
          name: 'Chandra Wiranata',
          memberType: 'Member'
        }
      ],
      schedule: [
        {
          id: 39,
          date: '27 November 2017',
          topic: 'JakartaJS with Kumparan',
          participants: 139
        },
        {
          id: 40,
          date: '27 September 2017',
          topic: 'JakartaJS with Blibli',
          participants: 239
        },
        {
          id: 41,
          date: '27 October 2017',
          topic: 'JakartaJS with Hacktiv8',
          participants: 39
        },
        {
          id: 39,
          date: '27 November 2017',
          topic: 'JakartaJS with Kumparan',
          participants: 139
        },
        {
          id: 40,
          date: '27 September 2017',
          topic: 'JakartaJS with Blibli',
          participants: 239
        },
        {
          id: 41,
          date: '27 October 2017',
          topic: 'JakartaJS with Hacktiv8',
          participants: 39
        }
      ],
      members: []
    };
  };

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=5")
      .then(response => {
        this.setState({
          members: response.data.results,
        })
      });
  };

  render() {
    return (
      <div>
        <NavbarQTemu/>
        <Header
          image = {this.state.meetup.image}
          title = {this.state.meetup.title}
          location = {this.state.meetup.location}
          totalMembers = {this.state.meetup.totalMembers}
          organizer = {this.state.meetup.organizer}
        />
        <NextMeetup
          title = {this.state.invitation.title}
          date = {this.state.invitation.date}
          greetings = {this.state.invitation.greetings}
          text = {this.state.invitation.text}
          organizer = {this.state.invitation.organizer}
        />
        <AboutMeetup
          twitter = {this.state.profile.twitter}
          hashtag = {this.state.profile.hashtag}
        />
        <Members
          members = {this.state.members}
          length = {this.state.member.length}
        />
        <PastMeetup
          schedule = {this.state.schedule}
        />
        <Footer/>
      </div>
    )
  }
}
