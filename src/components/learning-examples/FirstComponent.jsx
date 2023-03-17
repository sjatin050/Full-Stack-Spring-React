// export help to export function to another file .. else will give error
// can use default only in one function

export default function FirstComponent() {
    return (
      <div className="FirstComponent">First Component</div>
    )
  }

export function FifthComponent() {
    return (
      <div className="FifthComponent">Fifth Component</div>
    )
  }