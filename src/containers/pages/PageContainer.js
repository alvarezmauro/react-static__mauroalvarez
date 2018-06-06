import React from 'react'

class PageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPage: 0,
      busy: 1
    }
  }

  changePage = (pageNumber) => (e) => {
    console.log('changePage - Event', e);
    console.log(`changePage - state.selectedPage: {this.state.selectedPage}`);


    this.setState((prevState, props) => {
      return {selectedPage: pageNumber};
    })
  };

  render() {
    let state = {...this.state};

    return (
      <div className="container">
        <div id="pageContainer" className="page-container">
          <div id="pageOne" className={state.selectedPage === 1 ? 'page page--one page--expanded' : 'page page--one'} />
          <div id="pageOneContent" className={state.selectedPage === 1 ? 'page-content page-content--one page-content--show' : 'page-content page-content--one'}>
            {state.selectedPage}
          </div>

          <div id="pageTwo" className={state.selectedPage === 2 ? 'page page--two page--expanded' : 'page page--two'} />
          <div id="pageTwoContent" className={state.selectedPage === 2 ? 'page-content page-content--two page-content--show' : 'page-content page-content--two'}>
            {state.selectedPage}
          </div>
        </div>

        <div onClick={this.changePage(1)} className={`animated btn-expand btn-expand--one ${state.selectedPage === 1 ? 'btn-expand--clicked bounceOutCustom' : ''}` } />
        <div onClick={this.changePage(2)} className={`animated btn-expand btn-expand--two ${state.selectedPage === 2 ? 'btn-expand--clicked bounceOutCustom' : ''}` } />
      </div>
    )
  }
}

export default PageContainer;