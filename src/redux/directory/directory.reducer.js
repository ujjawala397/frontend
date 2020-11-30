const INITIAL_STATE={
    sections: [
        {
          title: 'Besan',
          imageUrl: 'https://i.ibb.co/2yqCXbr/besan.jpg',
          id: 1,
          linkUrl:'shop/besan'
        },
        {
          title: 'Haldi',
          imageUrl: 'https://i.ibb.co/RhCpRKW/haldi.jpg',
          id: 2,
          linkUrl:'shop/haldi'
        },
        {
          title: 'Dhaniya',
          imageUrl: 'https://i.ibb.co/BL18HkZ/dhaniya.jpg',
          id: 3,
          linkUrl:'shop/dhaniya'
        },
        {
          title: 'Mirch',
          imageUrl: 'https://i.ibb.co/CMmvTMc/lal.jpg',
          id: 4,
          linkUrl:'shop/mirch'
        }
      ]   
};

const directoryReducer =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;