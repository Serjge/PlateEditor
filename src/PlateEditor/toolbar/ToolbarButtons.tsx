import { FontDownload } from '@styled-icons/material/FontDownload';
import { FormatColorText } from '@styled-icons/material/FormatColorText';
import { Image } from '@styled-icons/material/Image';
import { LineWeight } from '@styled-icons/material/LineWeight';
import { Link } from '@styled-icons/material/Link';
import { OndemandVideo } from '@styled-icons/material/OndemandVideo';
import {
  ColorPickerToolbarDropdown,
  HeadingToolbar,
  ImageToolbarButton,
  LineHeightToolbarDropdown,
  LinkToolbarButton,
  MARK_BG_COLOR,
  MARK_COLOR,
  MediaEmbedToolbarButton,
  ToolbarProps,
} from '@udecode/plate';
import { AlignToolbarButtons } from 'PlateEditor/toolbar/AlignToolbarButtons';
import React, { ReactElement } from 'react';
import { Check } from 'styled-icons/material';
import { BasicElementToolbarButtons } from './BasicElementToolbarButtons';
import { BasicMarkToolbarButtons } from './BasicMarkToolbarButtons';
import { ListToolbarButtons } from './ListToolbarButtons';
import { TableToolbarButtons } from './TableToolbarButtons';

const tooltips = {
  color: { content: 'Text color' },
  bg: { content: 'Highlight color' },
};

export const Toolbar = (props: ToolbarProps) => <HeadingToolbar { ...props } />;

export const ToolbarButtons = (): ReactElement => {
  return (
    <Toolbar>
      <LineHeightToolbarDropdown icon={ <LineWeight/> }/>
      <AlignToolbarButtons/>
      <BasicMarkToolbarButtons/>
      <BasicElementToolbarButtons/>
      <ListToolbarButtons/>
      <LinkToolbarButton icon={ <Link/> }/>
      <ColorPickerToolbarDropdown
        pluginKey={ MARK_COLOR }
        icon={ <FormatColorText/> }
        selectedIcon={ <Check/> }
        tooltip={ tooltips.color }
      />
      <ColorPickerToolbarDropdown
        pluginKey={ MARK_BG_COLOR }
        icon={ <FontDownload/> }
        selectedIcon={ <Check/> }
        tooltip={ tooltips.bg }
      />
      <ImageToolbarButton icon={ <Image/> }/>
      <MediaEmbedToolbarButton icon={ <OndemandVideo/> }/>
      <TableToolbarButtons/>
    </Toolbar>

  )
};
