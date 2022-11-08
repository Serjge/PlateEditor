import { LinkPlugin, PlateFloatingLink } from '@udecode/plate';
import { MyPlatePlugin } from 'PlateEditor/types';

export const linkPlugin: Partial<MyPlatePlugin<LinkPlugin>> = {
  renderAfterEditable: PlateFloatingLink,
};
