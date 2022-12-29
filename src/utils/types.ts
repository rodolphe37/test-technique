export type HomeProps = {
  drawerISOpen?: boolean
}

export type ActionsProps = {
  children: React.ReactNode
  choosedActionType: () => void
  role: string
  timeoutClear: () => void
}

export type SelectorProps = {
  arr: number[]
  setter: React.Dispatch<React.SetStateAction<number>>
  value: number
  label: string
}

export type IOwnProps = {
  value: number
  className?: string
  color: string
}

export type Props = IOwnProps & React.SVGProps<SVGSVGElement>

export type DrawerTimeProps = {
  handleValidateParameters: () => Promise<void>
}

export type DeleteButtonProps = {
  deleteHeatingProgram: () => Promise<void>
  isClickedOnDelete: boolean
  validateHeatCycle: boolean
  isLoadingAction: boolean
}

export type ValidatedMessageProps = {
  timeLapseBeforeEnd: string
  validateHeatCycle: boolean
  isLoadingAction: boolean
  temperatureInstruction: number
}
export type ConfirmedDeletionMessageProps = {
  isConfirmedDeletionMessage: boolean
}

export type InputProps = {
  testid: string
  placeholder: string
  type: string
  value: string
  setter: React.Dispatch<React.SetStateAction<string>>
}
