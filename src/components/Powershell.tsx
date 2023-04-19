function Powershell() {
    return (
        <code>
            {`
        # Import the necessary DLLs
Add-Type -AssemblyName WindowsBase
Add-Type -AssemblyName PresentationFramework

# Set the Caps Lock key to Esc key
$kl = [Windows.Input.KeyInterop]::KeyFromVirtualKey(0x14) # Caps Lock virtual key code
$kh = [Windows.Input.KeyInterop]::KeyFromVirtualKey(0x1B) # Esc virtual key code
$kb = [Windows.Input.Keyboard]
$kb::AddKeyDownHandler($null, [Windows.Input.KeyEventHandler]{
    param($sender, $e)
    if ($e.Key -eq $kl) {
        $kb::FocusedElement.RaiseEvent((New-Object Windows.Input.KeyEventArgs($e.KeyboardDevice, [Windows.Presentation.Input.Keyboard.PrimaryDevice.ActiveSource], 0, $kh)))
        $e.Handled = $true
    }
})
$kb::AddKeyUpHandler($null, [Windows.Input.KeyEventHandler]{
    param($sender, $e)
    if ($e.Key -eq $kl) {
        $kb::FocusedElement.RaiseEvent((New-Object Windows.Input.KeyEventArgs($e.KeyboardDevice, [Windows.Presentation.Input.Keyboard.PrimaryDevice.ActiveSource], 0, $kh)))
        $e.Handled = $true
    }
})

# Set the keyboard layout to US
$en_US = New-Object Windows.Globalization.Language("en-US")
$layout = [Windows.Globalization.Language]::CurrentInputMethodLanguageTag
if ($layout -ne $en_US.LanguageTag) {
    $ime = [Windows.Globalization.InputMethod.InputMethodConfiguration]::GetCurrent()
    $ime.SetInputMethodLanguageTag($en_US.LanguageTag)
}

        `}
        </code>
    )
}

export default Powershell
