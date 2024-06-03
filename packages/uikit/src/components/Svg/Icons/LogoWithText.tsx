import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Logo: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    // <Svg viewBox="0 0 1281 199" {...props}>
    //   <path
    //     fill={vars.colors.contrast}
    //     d="M247.013 153.096c-2.979 0-5.085-.617-6.318-1.849-1.13-1.233-1.695-3.185-1.695-5.856v-89.22c0-2.672.616-4.624 1.849-5.856 1.233-1.336 3.287-2.004 6.164-2.004h37.753c14.382 0 24.963 3.031 31.744 9.092 6.78 6.061 10.17 15.101 10.17 27.12 0 11.917-3.39 20.906-10.17 26.967-6.678 5.959-17.259 8.938-31.744 8.938h-14.639v24.963c0 2.671-.616 4.623-1.849 5.856-1.233 1.232-3.339 1.849-6.318 1.849h-14.947zm35.288-55.012c4.212 0 7.448-1.13 9.708-3.39 2.362-2.26 3.544-5.65 3.544-10.17 0-4.623-1.182-8.065-3.544-10.325-2.26-2.26-5.496-3.39-9.708-3.39h-12.174v27.275h12.174zM363.071 155.407c-9.656 0-17.412-3.082-23.268-9.245-5.753-6.267-8.629-15.05-8.629-26.351 0-8.629 1.952-16.18 5.855-22.652 4.007-6.472 9.606-11.454 16.797-14.947 7.294-3.595 15.666-5.393 25.117-5.393 7.808 0 14.691.873 20.649 2.62 6.061 1.643 11.608 4.057 16.642 7.242v61.638c0 1.952-.359 3.236-1.079 3.852-.719.617-2.157.925-4.314.925h-15.718c-1.13 0-2.003-.154-2.619-.463-.617-.41-1.13-1.027-1.541-1.849l-2.004-4.622c-2.979 3.184-6.574 5.496-10.786 6.934-4.109 1.541-9.143 2.311-15.102 2.311zm11.558-20.957c4.006 0 7.139-.976 9.399-2.927 2.26-1.952 3.39-4.726 3.39-8.322V99.163c-1.951-.925-4.417-1.387-7.396-1.387-5.445 0-9.811 1.9-13.098 5.701-3.185 3.801-4.777 9.143-4.777 16.026 0 9.965 4.16 14.947 12.482 14.947zM437.679 153.096c-2.98 0-5.086-.617-6.318-1.849-1.233-1.233-1.849-3.185-1.849-5.856V83.907c0-1.849.308-3.082.924-3.698.719-.72 2.157-1.079 4.315-1.079h15.872c1.232 0 2.157.206 2.773.617.719.308 1.13.924 1.233 1.849l.77 4.623c2.877-2.877 6.627-5.137 11.249-6.78 4.726-1.747 9.965-2.62 15.718-2.62 8.321 0 15.05 2.363 20.186 7.088 5.137 4.623 7.705 11.506 7.705 20.649v40.835c0 2.671-.616 4.623-1.849 5.856-1.13 1.232-3.185 1.849-6.164 1.849h-14.947c-2.979 0-5.136-.617-6.472-1.849-1.233-1.233-1.849-3.185-1.849-5.856v-38.832c0-3.082-.668-5.29-2.003-6.626-1.336-1.335-3.442-2.003-6.318-2.003-3.082 0-5.548.822-7.397 2.465-1.746 1.644-2.619 3.904-2.619 6.781v38.215c0 2.671-.617 4.623-1.849 5.856-1.13 1.232-3.185 1.849-6.164 1.849h-14.947zM564.725 155.407c-14.382 0-25.477-3.339-33.285-10.016-7.807-6.677-11.711-16.385-11.711-29.124 0-7.807 1.798-14.69 5.393-20.648 3.596-5.959 8.784-10.582 15.564-13.869 6.883-3.287 14.999-4.931 24.347-4.931 7.088 0 13.047.668 17.875 2.003 4.931 1.336 9.297 3.39 13.098 6.164 1.13.72 1.695 1.644 1.695 2.774 0 .822-.411 1.9-1.233 3.236l-6.318 10.94c-.719 1.439-1.592 2.158-2.619 2.158-.617 0-1.593-.411-2.928-1.233-2.774-1.746-5.393-3.03-7.859-3.852-2.363-.822-5.342-1.233-8.937-1.233-5.137 0-9.297 1.644-12.482 4.931-3.082 3.287-4.623 7.807-4.623 13.56 0 5.856 1.592 10.376 4.777 13.56 3.185 3.082 7.551 4.623 13.098 4.623 3.287 0 6.267-.462 8.938-1.387 2.671-.924 5.393-2.208 8.167-3.852 1.438-.822 2.465-1.233 3.082-1.233.924 0 1.746.719 2.465 2.158l6.934 11.865c.514 1.027.771 1.849.771 2.465 0 .925-.617 1.798-1.849 2.62-4.315 2.774-9.041 4.828-14.177 6.164-5.034 1.438-11.095 2.157-18.183 2.157zM638.004 155.407c-9.657 0-17.413-3.082-23.268-9.245-5.753-6.267-8.63-15.05-8.63-26.351 0-8.629 1.952-16.18 5.856-22.652 4.006-6.472 9.605-11.454 16.796-14.947 7.294-3.595 15.667-5.393 25.118-5.393 7.807 0 14.69.873 20.648 2.62 6.061 1.643 11.609 4.057 16.643 7.242v61.638c0 1.952-.36 3.236-1.079 3.852-.719.617-2.157.925-4.315.925h-15.717c-1.13 0-2.004-.154-2.62-.463-.616-.41-1.13-1.027-1.541-1.849l-2.003-4.622c-2.979 3.184-6.575 5.496-10.787 6.934-4.109 1.541-9.143 2.311-15.101 2.311zm11.557-20.957c4.007 0 7.14-.976 9.4-2.927 2.26-1.952 3.39-4.726 3.39-8.322V99.163c-1.952-.925-4.417-1.387-7.397-1.387-5.444 0-9.81 1.9-13.098 5.701-3.184 3.801-4.777 9.143-4.777 16.026 0 9.965 4.161 14.947 12.482 14.947zM787.963 147.24c.719.822 1.079 1.747 1.079 2.774 0 .924-.308 1.695-.925 2.311-.616.514-1.438.771-2.465.771h-23.885c-1.438 0-2.517-.103-3.236-.308-.616-.309-1.284-.874-2.003-1.695l-20.957-28.508v22.806c0 2.671-.616 4.623-1.849 5.856-1.233 1.232-3.339 1.849-6.318 1.849h-14.947c-2.979 0-5.085-.617-6.318-1.849-1.13-1.233-1.695-3.185-1.695-5.856v-89.22c0-2.672.616-4.624 1.849-5.856 1.233-1.336 3.288-2.004 6.164-2.004h14.947c2.979 0 5.085.668 6.318 2.004 1.233 1.232 1.849 3.184 1.849 5.855v51.622l20.341-26.504c.616-.822 1.284-1.387 2.003-1.695.719-.309 1.798-.463 3.236-.463h23.885c1.027 0 1.797.309 2.311.925.616.514.925 1.233.925 2.157 0 1.028-.36 1.952-1.079 2.774l-26.35 30.203 27.12 32.051zM837.998 155.407c-8.629 0-16.334-1.438-23.114-4.314-6.677-2.877-11.968-7.192-15.872-12.944-3.903-5.753-5.855-12.79-5.855-21.111 0-13.047 3.698-23.012 11.095-29.895 7.396-6.883 18.029-10.324 31.897-10.324 13.561 0 23.834 3.39 30.819 10.17 7.089 6.678 10.633 15.975 10.633 27.891 0 5.137-2.26 7.705-6.78 7.705h-48.386c0 4.417 1.643 7.808 4.931 10.17 3.39 2.363 8.475 3.544 15.255 3.544 4.212 0 7.705-.359 10.479-1.078 2.876-.822 5.753-2.003 8.629-3.544 1.233-.514 2.055-.771 2.465-.771.925 0 1.695.617 2.312 1.849l5.239 9.862c.514 1.028.771 1.798.771 2.312 0 .924-.617 1.798-1.85 2.619-4.211 2.774-8.988 4.777-14.33 6.01-5.342 1.233-11.455 1.849-18.338 1.849zm11.866-48.077c0-3.904-1.13-6.935-3.39-9.092-2.26-2.157-5.651-3.236-10.171-3.236s-7.961 1.13-10.324 3.39c-2.363 2.158-3.544 5.137-3.544 8.938h27.429zM930.417 155.407c-8.63 0-16.797-.873-24.501-2.619-7.705-1.85-13.92-4.418-18.646-7.705-1.746-1.13-2.619-2.312-2.619-3.544 0-.822.308-1.695.924-2.62l7.551-12.019c.822-1.233 1.643-1.849 2.465-1.849.514 0 1.387.359 2.62 1.078 3.801 2.158 8.115 3.904 12.944 5.239 4.828 1.336 9.605 2.004 14.331 2.004 4.828 0 8.372-.719 10.632-2.158 2.363-1.438 3.544-3.749 3.544-6.934 0-3.082-1.284-5.496-3.852-7.242-2.466-1.747-7.14-3.955-14.023-6.626-10.375-3.904-18.491-8.27-24.347-13.099-5.753-4.93-8.629-11.608-8.629-20.032 0-10.17 3.647-17.926 10.941-23.268C907.046 48.67 916.753 46 928.876 46c8.423 0 15.615.77 21.573 2.311 6.061 1.439 11.197 3.699 15.409 6.78 1.747 1.336 2.62 2.569 2.62 3.699 0 .719-.308 1.54-.925 2.465l-7.55 12.02c-.925 1.232-1.747 1.849-2.466 1.849-.513 0-1.387-.36-2.619-1.079-5.959-3.904-13.047-5.855-21.265-5.855-4.418 0-7.808.719-10.171 2.157-2.362 1.438-3.544 3.801-3.544 7.088 0 2.26.617 4.11 1.849 5.548 1.233 1.438 2.877 2.722 4.931 3.852 2.158 1.027 5.445 2.363 9.862 4.007l2.928 1.078c7.602 2.98 13.561 5.856 17.875 8.63 4.418 2.67 7.756 6.009 10.016 10.016 2.26 3.903 3.39 8.834 3.39 14.793 0 9.143-3.441 16.437-10.324 21.881-6.78 5.445-16.796 8.167-30.048 8.167zM1003.53 153.096c-1.54 0-2.72-.257-3.544-.771-.822-.513-1.439-1.541-1.85-3.082l-19.878-66.569c-.205-.616-.308-1.078-.308-1.386 0-1.438 1.027-2.158 3.082-2.158h20.338c1.34 0 2.31.257 2.93.77.62.412 1.03 1.13 1.23 2.158l8.32 34.98 10.48-28.2c.52-1.232 1.03-2.054 1.54-2.465.62-.514 1.65-.77 3.09-.77h9.7c1.44 0 2.42.256 2.93.77.62.41 1.18 1.233 1.7 2.465l10.32 28.2 8.48-34.98c.3-1.027.71-1.746 1.23-2.157.51-.514 1.44-.77 2.77-.77h20.5c2.05 0 3.08.719 3.08 2.157 0 .308-.1.77-.31 1.386l-20.03 66.569c-.41 1.541-1.03 2.569-1.85 3.082-.72.514-1.85.771-3.39.771h-15.1c-1.44 0-2.52-.257-3.24-.771-.72-.616-1.33-1.643-1.85-3.082l-10.17-27.891-10.17 27.891c-.41 1.439-1.03 2.466-1.85 3.082-.72.514-1.79.771-3.23.771h-14.95zM1128.73 155.407c-9.66 0-17.41-3.082-23.27-9.245-5.75-6.267-8.63-15.05-8.63-26.351 0-8.629 1.95-16.18 5.86-22.652 4-6.472 9.6-11.454 16.79-14.947 7.3-3.595 15.67-5.393 25.12-5.393 7.81 0 14.69.873 20.65 2.62 6.06 1.643 11.61 4.057 16.64 7.242v61.638c0 1.952-.36 3.236-1.08 3.852-.72.617-2.15.925-4.31.925h-15.72c-1.13 0-2-.154-2.62-.463-.62-.41-1.13-1.027-1.54-1.849l-2-4.622c-2.98 3.184-6.58 5.496-10.79 6.934-4.11 1.541-9.14 2.311-15.1 2.311zm11.56-20.957c4 0 7.14-.976 9.4-2.927 2.26-1.952 3.39-4.726 3.39-8.322V99.163c-1.96-.925-4.42-1.387-7.4-1.387-5.45 0-9.81 1.9-13.1 5.701-3.18 3.801-4.78 9.143-4.78 16.026 0 9.965 4.17 14.947 12.49 14.947zM1203.18 184.223c-2.98 0-5.08-.616-6.32-1.849-1.13-1.233-1.69-3.185-1.69-5.856V88.222c4.62-3.287 10.43-6.01 17.41-8.167 6.99-2.157 14.28-3.236 21.88-3.236 31.03 0 46.54 13.15 46.54 39.448 0 11.917-3.29 21.419-9.86 28.508-6.58 7.088-15.87 10.632-27.89 10.632-3.39 0-6.68-.411-9.87-1.233-3.08-.821-5.65-1.951-7.7-3.39v25.734c0 2.671-.62 4.623-1.85 5.856-1.23 1.233-3.34 1.849-6.32 1.849h-14.33zm33.44-49.619c4.42 0 7.71-1.643 9.86-4.931 2.26-3.39 3.39-7.91 3.39-13.56 0-6.677-1.33-11.352-4-14.023-2.57-2.773-6.58-4.16-12.02-4.16-3.5 0-6.27.462-8.32 1.387v24.501c0 3.493.97 6.164 2.92 8.013 1.96 1.849 4.68 2.773 8.17 2.773z"
    //   />
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M97.556 198.607c-29.192-.022-52.708-7.027-69.138-19.609-16.627-12.733-25.448-30.803-25.448-51.25 0-19.701 8.801-33.907 18.76-43.51 7.805-7.525 16.417-12.344 22.414-15.117-1.356-4.162-3.048-9.61-4.562-15.238-2.025-7.53-4.012-16.366-4.012-22.84 0-7.663 1.67-15.36 6.175-21.34C46.505 3.385 53.671 0 62.291 0c6.737 0 12.457 2.499 16.934 6.81 4.28 4.12 7.13 9.593 9.097 15.298 3.456 10.024 4.802 22.618 5.179 35.187h8.257c.378-12.569 1.723-25.163 5.18-35.187 1.967-5.705 4.815-11.177 9.096-15.298C120.512 2.5 126.231 0 132.968 0c8.621 0 15.786 3.385 20.546 9.703 4.505 5.98 6.176 13.677 6.176 21.34 0 6.474-1.988 15.31-4.013 22.84-1.514 5.628-3.206 11.076-4.562 15.238 5.997 2.773 14.61 7.592 22.414 15.118 9.959 9.602 18.76 23.808 18.76 43.509 0 20.447-8.82 38.517-25.448 51.25-16.43 12.582-39.946 19.587-69.138 19.609h-.147z"
    //     fill="#633001"
    //   />
    //   <path
    //     d="M62.29 7.288c-12.625 0-18.437 9.516-18.437 22.675 0 10.46 6.753 31.408 9.523 39.563.624 1.835-.356 3.844-2.142 4.555-10.119 4.031-39.981 18.789-39.981 52.588 0 35.603 30.347 62.448 86.31 62.491l.066-.001.067.001c55.962-.043 86.309-26.888 86.309-62.491 0-33.799-29.862-48.557-39.981-52.588-1.786-.71-2.765-2.72-2.142-4.555 2.771-8.154 9.524-29.103 9.524-39.563 0-13.16-5.812-22.675-18.438-22.675-18.174 0-22.705 26.007-23.028 53.92-.021 1.863-1.513 3.375-3.357 3.375H88.676c-1.845 0-3.336-1.512-3.358-3.375-.323-27.913-4.853-53.92-23.028-53.92z"
    //     fill="#D1884F"
    //   />
    //   <path
    //     d="M97.696 177.755c-41.118 0-86.372-22.235-86.443-51.018v.134c0 35.632 30.395 62.491 86.443 62.491s86.443-26.859 86.443-62.491v-.134c-.071 28.783-45.325 51.018-86.443 51.018z"
    //     fill="#FEDC90"
    //   />
    //   <path
    //     className="eye"
    //     d="M74.85 117.896c0 9.718-4.546 14.779-10.154 14.779s-10.154-5.061-10.154-14.779 4.546-14.779 10.154-14.779 10.154 5.061 10.154 14.779zM140.851 117.896c0 9.718-4.546 14.779-10.154 14.779s-10.154-5.061-10.154-14.779 4.546-14.779 10.154-14.779 10.154 5.061 10.154 14.779z"
    //     fill="#633001"
    //   />
    // </Svg>
    <Svg viewBox="0 0 6866.63 932" {...props}>
      <path fill="#DA251D" d="M0,932V0H1098V932Zm1014-78V80H78.21V854Z" />
      <path
        fill="#DA251D"
        d="M958.72,672.44v119H131.52V672.47H259.73V711.8H358V672.46H486.79v39.35H604.1V672.45H732.68v39.37h97.49V672.44Z"
      />
      <path fill="#DA251D" d="M830.2,403.34H958.65V519.5H131.57v-123H259.62v43.23H830.2Z" />
      <path fill="#DA251D" d="M958.69,381.53H131.53V302.31H495V262.43H623.79V302h334.9Z" />
      <path fill="#DA251D" d="M131.45,164.13H495V126.51H623.78V164H958.59v79.44H131.45Z" />
      <path fill="#DA251D" d="M958.85,557.56v78.8H131.44v-78.8Z" />
      <path d="M1308.1,674.91V226a34.91,34.91,0,0,1,2.59-13.42,33.29,33.29,0,0,1,7.27-11,33.83,33.83,0,0,1,10.84-7.27,34.53,34.53,0,0,1,13.58-2.59H1442a165.92,165.92,0,0,1,45.11,6.14A170.22,170.22,0,0,1,1528,215.37a180.68,180.68,0,0,1,34.93,27,168.49,168.49,0,0,1,27,34.77,178.82,178.82,0,0,1,17.46,40.91,161.49,161.49,0,0,1,6.31,45.11q0,70.5-50.77,121.27-50.13,50.13-121,50.13h-65.33V674.91a34.28,34.28,0,1,1-68.56,0Zm68.56-414.59V466H1442a98.27,98.27,0,0,0,39.61-8.08,106,106,0,0,0,32.66-22,104.49,104.49,0,0,0,22.32-32.66,102.36,102.36,0,0,0,0-80.52,103.35,103.35,0,0,0-55.14-54.5,100.43,100.43,0,0,0-39.45-7.92Z" />
      <path d="M2090.72,627.05q0,13.59-10.67,24.58-72.12,57.57-162.67,57.56-107.37,0-183-75.67t-75.68-183q0-107,75.68-182.72,76-76,183-76,91.84,0,165.9,60.47,9,8.41,9.06,23.61a34.76,34.76,0,0,1-2.59,13.59,33.81,33.81,0,0,1-7.28,10.83,33.28,33.28,0,0,1-11,7.28,35.13,35.13,0,0,1-13.42,2.58q-13.27,0-23.61-9.7a186,186,0,0,0-54.17-29.75,189.19,189.19,0,0,0-62.9-10.35q-78.92,0-134.86,55.95-55.3,55.29-55.3,134.21,0,79.23,55.3,134.53,55.62,55.62,134.86,55.62,58.53,0,104.78-30.72V509.66H1932.9q-14.55,0-24.41-9.87t-9.87-24.41a34.91,34.91,0,0,1,2.59-13.42,33.06,33.06,0,0,1,7.28-11,33.51,33.51,0,0,1,10.83-7.27,34.53,34.53,0,0,1,13.58-2.59h123.86a31.39,31.39,0,0,1,12.94,2.75,35.93,35.93,0,0,1,10.83,7.44,35.39,35.39,0,0,1,7.44,11,32.48,32.48,0,0,1,2.75,13.1Z" />
      <path d="M2149.25,637.4a32.76,32.76,0,0,1-6.79-20.7,34.94,34.94,0,0,1,2.59-13.42,33,33,0,0,1,7.28-11,33.54,33.54,0,0,1,10.83-7.28,34.71,34.71,0,0,1,13.58-2.59q19.08,0,28.78,15.85,13.59,21,34,31.69a93.29,93.29,0,0,0,44,10.67,84.49,84.49,0,0,0,34.77-7.27,91.32,91.32,0,0,0,47.7-48.51,89.24,89.24,0,0,0,7.11-35.41,85.12,85.12,0,0,0-6.63-33.48,89.83,89.83,0,0,0-17.95-27.48,94,94,0,0,0-26.35-19.25,91.15,91.15,0,0,0-31.86-9.05,130.51,130.51,0,0,1-48.18-13.58,139.85,139.85,0,0,1-39.13-29.27,134.58,134.58,0,0,1-26.36-41.07,127.19,127.19,0,0,1-9.54-49q0-31.68,12-57.4t35.26-45.76h-.33q37.18-32.34,87.32-32.34a133.14,133.14,0,0,1,32.34,4,130.75,130.75,0,0,1,31.21,12.29,138.4,138.4,0,0,1,28.13,20.54,144.38,144.38,0,0,1,23.45,28.78,36.28,36.28,0,0,1,4.85,18.43,34.58,34.58,0,0,1-2.59,13.59,33.78,33.78,0,0,1-7.27,10.83,33.32,33.32,0,0,1-11,7.28,35.09,35.09,0,0,1-13.42,2.58,31.47,31.47,0,0,1-11.48-1.94,29.91,29.91,0,0,1-9.06-5.49,63.52,63.52,0,0,1-7.76-8.25q-3.72-4.68-7.92-10.84a47.37,47.37,0,0,0-21.18-17,73.81,73.81,0,0,0-29-5.66,60,60,0,0,0-23.93,5,68.76,68.76,0,0,0-20.7,13.74,70.19,70.19,0,0,0-14.71,20.7,59.67,59.67,0,0,0-5.66,25.87,61.8,61.8,0,0,0,4.69,23.93,69,69,0,0,0,12.77,20.22A67.68,67.68,0,0,0,2272,385a60.13,60.13,0,0,0,23.45,6.63A150.58,150.58,0,0,1,2352,407.14,162.79,162.79,0,0,1,2430,490.25a147,147,0,0,1,11.64,57.89q0,75.68-55.94,122.89h.32q-45,38.16-102.19,38.16a159.2,159.2,0,0,1-38.17-4.69,167.06,167.06,0,0,1-36.7-13.74,159.78,159.78,0,0,1-33-22.64A154.32,154.32,0,0,1,2149.25,637.4Z" />
      <path d="M2554.47,214.72l92.17,332.13L2738.48,215q2.58-10,11.8-16.65a36.09,36.09,0,0,1,40.75-.65,30.92,30.92,0,0,1,12.78,17L2896,546.85l92.5-332.13a31.76,31.76,0,0,1,8.08-12.93,33,33,0,0,1,24.26-10,32.5,32.5,0,0,1,24.09,10,33.33,33.33,0,0,1,9.86,24.25,64.16,64.16,0,0,1-2.26,13.58L2930.58,681.38A46,46,0,0,1,2917,701.59a31.73,31.73,0,0,1-21,7.6q-14.55,0-23.93-10.35A48,48,0,0,1,2861.69,682l-90.22-326.95-90.23,326.3a46,46,0,0,1-13.58,20.21,33.27,33.27,0,0,1-45.28-2.75,43.13,43.13,0,0,1-10-16.81L2489.79,239.3a53.39,53.39,0,0,1-1.94-13.26,34.29,34.29,0,0,1,58.53-24.25A37.3,37.3,0,0,1,2554.47,214.72Z" />
      <path d="M3061.88,659.39,3234.57,215q10.35-23.28,32.66-23.28,23,0,32.67,23.28l173.34,446a37.18,37.18,0,0,1,2.58,13.9,34.21,34.21,0,0,1-34.28,34.28,32,32,0,0,1-23.93-10,36.62,36.62,0,0,1-7.76-11L3350,534.56H3184.44l-60.15,153.61a36.8,36.8,0,0,1-7.76,11,33,33,0,0,1-24.25,10,32.53,32.53,0,0,1-24.1-10,33.29,33.29,0,0,1-9.86-24.26A36.85,36.85,0,0,1,3061.88,659.39ZM3323.5,466l-56.27-145.21L3211,466Z" />
      <path d="M3523,674.91V226a34.91,34.91,0,0,1,2.59-13.42,33.29,33.29,0,0,1,7.27-11,33.83,33.83,0,0,1,10.84-7.27,34.53,34.53,0,0,1,13.58-2.59h99.61A165.92,165.92,0,0,1,3702,197.9,170.22,170.22,0,0,1,3743,215.37a180.68,180.68,0,0,1,34.93,27,168.49,168.49,0,0,1,27,34.77,178.82,178.82,0,0,1,17.46,40.91,161.49,161.49,0,0,1,6.31,45.11q0,70.5-50.77,121.27-50.13,50.13-121,50.13H3591.6V674.91a34.28,34.28,0,1,1-68.56,0Zm68.56-414.59V466h65.33a98.27,98.27,0,0,0,39.61-8.08,106.16,106.16,0,0,0,32.67-22,104.63,104.63,0,0,0,22.31-32.66,102.36,102.36,0,0,0,0-80.52,103.26,103.26,0,0,0-55.14-54.5,100.43,100.43,0,0,0-39.45-7.92Z" />
      <path d="M4054.06,674.91V226a35.09,35.09,0,0,1,2.58-13.42,33.32,33.32,0,0,1,7.28-11,33.78,33.78,0,0,1,10.83-7.27,34.58,34.58,0,0,1,13.59-2.59h299.14a34.29,34.29,0,0,1,24.25,58.53,33,33,0,0,1-24.25,10H4122.62V416.2h190.15a34.28,34.28,0,1,1,0,68.56H4122.62V674.91a34.28,34.28,0,1,1-68.56,0Z" />
      <path d="M4559.2,674.91a34.28,34.28,0,1,1-68.56,0V226a34.28,34.28,0,1,1,68.56,0Z" />
      <path d="M4623.56,674.91V226a35.09,35.09,0,0,1,2.58-13.42,33.32,33.32,0,0,1,7.28-11,33.78,33.78,0,0,1,10.83-7.27,34.61,34.61,0,0,1,13.59-2.59q15.19,0,26.52,12.61l288.46,370.94V226a34.28,34.28,0,1,1,68.56,0V674.91a34.76,34.76,0,0,1-2.58,13.59,33.81,33.81,0,0,1-7.28,10.83,33.28,33.28,0,0,1-11,7.28,35.18,35.18,0,0,1-13.43,2.58q-15.19,0-26.19-12L4692.12,326.29V674.91a34.28,34.28,0,1,1-68.56,0Z" />
      <path d="M5092.8,659.39,5265.5,215q10.35-23.28,32.66-23.28,23,0,32.66,23.28l173.34,446a37,37,0,0,1,2.59,13.9,34.21,34.21,0,0,1-34.28,34.28,32,32,0,0,1-23.93-10,36.62,36.62,0,0,1-7.76-11L5381,534.56H5215.37l-60.15,153.61a37,37,0,0,1-7.76,11,33.06,33.06,0,0,1-24.26,10,32.5,32.5,0,0,1-24.09-10,33.29,33.29,0,0,1-9.86-24.26A37,37,0,0,1,5092.8,659.39ZM5354.43,466l-56.27-145.21L5241.89,466Z" />
      <path d="M5554.94,674.91V226a35.09,35.09,0,0,1,2.58-13.42,33.32,33.32,0,0,1,7.28-11,33.78,33.78,0,0,1,10.83-7.27,34.61,34.61,0,0,1,13.59-2.59q15.2,0,26.52,12.61l288.47,370.94V226a34.28,34.28,0,1,1,68.56,0V674.91a34.76,34.76,0,0,1-2.59,13.59,33.81,33.81,0,0,1-7.28,10.83,33.28,33.28,0,0,1-11,7.28,35.13,35.13,0,0,1-13.42,2.58q-15.21,0-26.2-12L5623.5,326.29V674.91a34.28,34.28,0,1,1-68.56,0Z" />
      <path d="M6418.73,592.77a32.16,32.16,0,0,1,13.26,2.75,37.55,37.55,0,0,1,10.83,7.28A33.79,33.79,0,0,1,6453,627.05q0,13.59-10.67,24.58-72.12,57.57-162.67,57.56-107.37,0-183-75.67t-75.68-183q0-107,75.68-182.72,76-76,183-76,91.84,0,165.9,60.47,9,8.75,9.06,23.61a34.76,34.76,0,0,1-2.59,13.59,33.81,33.81,0,0,1-7.28,10.83,33.28,33.28,0,0,1-11,7.28,35.13,35.13,0,0,1-13.42,2.58q-12.62,0-23.61-9.7a186,186,0,0,0-54.17-29.75,189.19,189.19,0,0,0-62.9-10.35q-78.91,0-134.86,55.95-55.29,55.29-55.3,134.21,0,79.23,55.3,134.53,55.62,55.62,134.86,55.62,67.59,0,119-41.71Q6407.08,593.09,6418.73,592.77Z" />
      <path d="M6832.35,640.63a34.28,34.28,0,1,1,0,68.56H6533.21a34.71,34.71,0,0,1-13.58-2.58,33.83,33.83,0,0,1-18.11-18.11,34.58,34.58,0,0,1-2.59-13.59V226a34.91,34.91,0,0,1,2.59-13.42,33.29,33.29,0,0,1,7.27-11,33.83,33.83,0,0,1,10.84-7.27,34.53,34.53,0,0,1,13.58-2.59h299.14a34.3,34.3,0,0,1,24.26,58.53,33,33,0,0,1-24.26,10H6567.49V416.2h190.16a34.28,34.28,0,1,1,0,68.56H6567.49V640.63Z" />
    </Svg>
  );
};

export default Logo;
