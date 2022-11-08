import {
  createAlignPlugin,
  createBasicElementsPlugin,
  createBasicMarksPlugin,
  createExitBreakPlugin,
  createFontBackgroundColorPlugin,
  createFontColorPlugin,
  createFontSizePlugin,
  createImagePlugin,
  createLineHeightPlugin,
  createLinkPlugin,
  createListPlugin,
  createMediaEmbedPlugin,
  createResetNodePlugin,
  createSelectOnBackspacePlugin,
  createSoftBreakPlugin,
  createTablePlugin,
  createTodoListPlugin,
} from '@udecode/plate';
import { plateUI } from '../common';
import { createMyPlugins } from '../types';

import { alignPlugin } from './alignPlugin';
import { basicNodesPlugins } from './basicNodesPlugins';
import { exitBreakPlugin } from './exitBreakPlugin';
import { lineHeightPlugin } from './lineHeightPlugin';
import { linkPlugin } from './linkPlugins';
import { resetBlockTypePlugin } from './resetBlockTypePlugin';
import { selectOnBackspacePlugin } from './selectOnBackspacePlugin';
import { softBreakPlugin } from './softBreakPlugin';

export const plugins = createMyPlugins(
  [ ...basicNodesPlugins, createBasicMarksPlugin(),
    createBasicElementsPlugin(),
    createResetNodePlugin(resetBlockTypePlugin),
    createSoftBreakPlugin(softBreakPlugin),
    createExitBreakPlugin(exitBreakPlugin),
    createListPlugin(),
    createTodoListPlugin(),
    createLinkPlugin(linkPlugin),
    createMediaEmbedPlugin(),
    createImagePlugin(),
    createTablePlugin(),
    createFontColorPlugin(),
    createFontBackgroundColorPlugin(),
    createFontSizePlugin(),
    createLineHeightPlugin(lineHeightPlugin),
    createSelectOnBackspacePlugin(selectOnBackspacePlugin),
    createAlignPlugin(alignPlugin),
  ],
  {
    components: plateUI,
  },
);