import DoButton from './Button.vue'
import DoDialog from './Dialog.vue'
import DoInput from './Input.vue'
import DoSwitch from './Switch .vue'
import DoRadio from './Radio.vue'
import DoRadioGroup from './RadioGroup.vue'
import DoCheckbox from './Checkbox.vue'
import DoCheckboxGroup from './CheckboxGroup.vue'
import DoForm from './Form.vue'
import DoFormItem from './FormItem.vue'
import './fonts/font.scss'
const components = [
  DoButton,
  DoDialog,
  DoInput,
  DoSwitch,
  DoRadio,
  DoRadioGroup,
  DoCheckbox,
  DoCheckboxGroup,
  DoForm,
  DoFormItem
]
const install = function (Vue) {
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
