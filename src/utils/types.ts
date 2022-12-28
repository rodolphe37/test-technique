export interface HomeProps {
  drawerISOpen?: boolean
}

export interface ActionsProps {
  children: React.ReactNode
  choosedActionType: () => void
  role: string
  timeoutClear: () => void
}

export interface SelectorProps {
  arr: number[]
  setter: React.Dispatch<React.SetStateAction<number>>
  value: number
  label: string
}

export interface IOwnProps {
  value: number
  className?: string
  color: string
}

export type Props = IOwnProps & React.SVGProps<SVGSVGElement>

export interface DrawerTimeProps {
  handleValidateParameters: () => Promise<void>
}

export interface DeleteButtonProps {
  deleteHeatingProgram: () => Promise<void>
  isClickedOnDelete: boolean
  validateHeatCycle: boolean
  isLoadingAction: boolean
}

export interface ValidatedMessageProps {
  timeLapseBeforeEnd: string
  validateHeatCycle: boolean
  isLoadingAction: boolean
  temperatureInstruction: number
}
export interface ConfirmedDeletionMessageProps {
  isConfirmedDeletionMessage: boolean
}

export interface InputProps {
  testid: string
  placeholder: string
  type: string
  value: string
  setter: React.Dispatch<React.SetStateAction<string>>
}
