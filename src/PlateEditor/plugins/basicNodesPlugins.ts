import { basicElementsPlugins } from 'PlateEditor/plugins/basicElementsPlugins';
import { basicMarksPlugins } from './basicMarksPlugins';
import { plateUI } from '../common/plateUI';
import { createMyPlugins } from 'PlateEditor/types';

export const basicNodesPlugins = createMyPlugins(
  [ ...basicElementsPlugins, ...basicMarksPlugins ],
  {
    components: plateUI,
  },
);