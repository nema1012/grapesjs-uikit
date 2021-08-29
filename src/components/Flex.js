
export const FlexWithImage = (bm, c) => {
    bm.add('flexWithImage', {
      label: 'Flex With Image',
      category: 'Flex',
      content: `<div class="uk-flex-middle" uk-grid>
      <div class="uk-width-2-3-at-m">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
      </div>
      <div class="uk-width-1-3-at-m uk-flex-first">
          <img src="https://via.placeholder.com/1800x1200/665533/000000.png" alt="Image">
      </div>
  </div>`
    });
  };
  
  export const Flex = (bm, c) => {
    bm.add('flex', {
      label: 'Flex',
      category: 'Flex',
      content: `<div class="uk-flex">
      <div class="uk-card uk-card-default uk-card-body"><p>Item 1</p></div>
      <div class="uk-card uk-card-default uk-card-body uk-margin-left"><p>Item 2</p></div>
      <div class="uk-card uk-card-default uk-card-body uk-margin-left"><p>Item 3</p></div>
  </div>`
    });
  };
  
  export const FlexColumn = (bm, c) => {
    bm.add('flexColumn', {
      label: 'Flex Column',
      category: 'Flex',
      content: `<div class="uk-flex uk-flex-column uk-width-1-3">
      <div class="uk-card uk-card-default uk-card-body"><p>Item 1</div>
      <div class="uk-card uk-card-default uk-card-body uk-margin-top"><p>Item 2</p></div>
      <div class="uk-card uk-card-default uk-card-body uk-margin-top"><p>Item 3</p></div>
  </div>`
    });
  };
  