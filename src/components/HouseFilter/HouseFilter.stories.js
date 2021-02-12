import HouseFilter from './HouseFilter'
import { action } from '@storybook/addon-actions'

export default {
  title: 'HouseFilter',
  component: HouseFilter,
}

const onFilterByHouse = action('onFilterByHouse')
export const defaultHouseFilter = () => HouseFilter(action(onFilterByHouse))
