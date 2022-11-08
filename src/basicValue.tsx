import React from 'react'
/** @jsx jsx */
/** @jsxRuntime classic */

import { jsx } from '@udecode/plate-test-utils';

// jsx;

export const createTable = (): any => (
  <fragment>
    <htable>
      <htr>
        <htd>
          <hp>
            <htext />
          </hp>
        </htd>
        <htd>
          <hp>
            <htext bold>Human</htext>
          </hp>
        </htd>
        <htd>
          <hp>
            <htext bold>Dog</htext>
          </hp>
        </htd>
        <htd>
          <hp>
            <htext bold>Cat</htext>
          </hp>
        </htd>
      </htr>
      <htr>
        <htd>
          <hp>
            <htext bold># of Feet</htext>
          </hp>
        </htd>
        <htd>
          <hp>2</hp>
        </htd>
        <htd>
          <hp>4</hp>
        </htd>
        <htd>
          <hp>4</hp>
        </htd>
      </htr>
      <htr>
        <htd>
          <hp>
            <htext bold># of Lives</htext>
          </hp>
        </htd>
        <htd>
          <hp>1</hp>
        </htd>
        <htd>
          <hp>1</hp>
        </htd>
        <htd>
          <hp>9</hp>
        </htd>
      </htr>
    </htable>
  </fragment>
);
const attributes = { colspan: '2' };
export const createSpanningTable = (): any => (
  <fragment>
    <htable>
      <htr>
        <hth attributes={attributes}>
          <hp>
            <htext bold>Heading</htext>
          </hp>
        </hth>
      </htr>
      <htr>
        <htd>
          <hp>
            <htext bold>Cell 1</htext>
          </hp>
        </htd>
        <htd>
          <hp>Cell 2</hp>
        </htd>
      </htr>
    </htable>
  </fragment>
);

export const plainTextValue: any = (
  <fragment>
    <hh1>🧱 Elements</hh1>
    <hh2>🔥 Basic Elements</hh2>
    <hp>These are the most common elements, known as blocks:</hp>
    <hh1>Heading 1</hh1>
    <hh2>Heading 2</hh2>
    <hh3>Heading 3</hh3>
    <hh4>Heading 4</hh4>
    <hh5>Heading 5</hh5>
    <hh6>Heading 6</hh6>
    <hblockquote>Blockquote</hblockquote>
    <hcodeblock lang="javascript">
      <hcodeline>const a = 'Hello';</hcodeline>
      <hcodeline>const b = 'World';</hcodeline>
    </hcodeblock>

    <hh2>📷 Image</hh2>
    <hp>
      In addition to nodes that contain editable text, you can also create other
      types of nodes, like images or videos.
    </hp>
    <himg url="https://source.unsplash.com/kFrdX5IeQzI" width="75%">
      <htext />
    </himg>
    <hp>
      This example shows images in action. It features two ways to add images.
      You can either add an image via the toolbar icon above, or if you want in
      on a little secret, copy an image URL to your keyboard and paste it
      anywhere in the editor! Additionally, you can customize the toolbar button
      to load an url asynchronously, for example showing a file picker and
      uploading a file to Amazon S3. You can also add a caption and resize the
      image.
    </hp>

      <hh2>🎥 Media Embed</hh2>
      <hp>
        In addition to simple image nodes, you can actually create complex
        embedded nodes. For example, this one contains an input element that lets
        you change the video being rendered!
      </hp>
      <hmediaembed url="https://www.youtube.com/watch?v=4duqI8WyfqE">
        <htext />
      </hmediaembed>
      <hp>It also supports tweets:</hp>
      <hmediaembed url="https://twitter.com/reactjs/status/1508838714180612100">
        <htext />
      </hmediaembed>

    <hh2>✍️ List</hh2>
    <hp>
      <htext />
    </hp>
    <hul>
      <hli>
        <hlic>Bulleted list</hlic>
        <hul>
          <hli>
            <hlic>support</hlic>
            <hul>
              <hli>
                <hlic>a</hlic>
              </hli>
            </hul>
          </hli>
          <hli>
            <hlic>nesting</hlic>
            <hul>
              <hli>
                <hlic>b</hlic>
              </hli>
            </hul>
          </hli>
        </hul>
      </hli>
      <hli>
        <hlic>c</hlic>
      </hli>
    </hul>
    <hol>
      <hli>
        <hlic>Numbered list'</hlic>
      </hli>
    </hol>
    <hp>
      With Slate you can build complex block types that have their own embedded
      content and behaviors, like rendering checkboxes inside check list items!
    </hp>
    <htodoli checked>Slide to the left.</htodoli>
    <htodoli checked>Slide to the right.</htodoli>
    <htodoli>Criss-cross.</htodoli>
    <htodoli checked>Criss-cross.</htodoli>
    <htodoli>Cha cha real smooth…</htodoli>
    <htodoli>Let's go to work!</htodoli>
    <hp>Try it out for yourself!</hp>

    <hh2>🏓 Table</hh2>
    <hp>
      Since the editor is based on a recursive tree model, similar to an HTML
      document, you can create complex nested structures, like tables:
    </hp>
    {createTable()}
    <hp>
      This table is an example of rendering a table spanning multiple columns:
    </hp>
    {createSpanningTable()}

  </fragment>
);
