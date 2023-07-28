import { useId } from 'react'
import clsx from 'clsx'

import { InstallationIcon } from '@/components/icons/InstallationIcon'
import { LightbulbIcon } from '@/components/icons/LightbulbIcon'
import { PluginsIcon } from '@/components/icons/PluginsIcon'
import { PresetsIcon } from '@/components/icons/PresetsIcon'
import { ThemingIcon } from '@/components/icons/ThemingIcon'
import { WarningIcon } from '@/components/icons/WarningIcon'
import { FlashIcon } from '@/components/icons/FlashIcon'
import { SoftwareResource } from './icons/SoftwareResource'
import { KnowledgeCatalog } from './icons/KnowledgeCatalog'
import { DiscordIconBlue } from './icons/DiscordIconBlue'
import { GithubIcon } from './icons/GithubIcon'

const icons = {
  installation: InstallationIcon,
  presets: PresetsIcon,
  plugins: PluginsIcon,
  theming: ThemingIcon,
  lightbulb: LightbulbIcon,
  warning: WarningIcon,
  flash: FlashIcon,
  software: SoftwareResource,
  knowledge: KnowledgeCatalog,
  discord: DiscordIconBlue,
  github: GithubIcon,
}

export function Icon({ icon, ...props }) {
  let id = useId()
  let IconComponent = icons[icon]

  return <IconComponent id={id} {...props} />
}
