
export const Section = (bm, c) => {
  bm.add('section', {
    label: 'Section',
    category: 'Components',
    content: `<div class="uk-section uk-section-muted">
    <div class="uk-container">

        <h3>Section</h3>

        <div class="uk-grid-match uk-child-width-1-3-atm" uk-grid>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
        </div>

    </div>
</div>`
  });
};
