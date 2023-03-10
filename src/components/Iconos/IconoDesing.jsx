import React from 'react';

export default function IconoDesing(props) {

    function tipoIcono(titulo) {
        switch (titulo) {
            case 'photoshop':
                return <svg {...props} viewBox="0 0 32 32">
                    <svg viewBox="-1 5 35 30">
                        <path
                            d="M3.167 3.517h25.666v24.966H3.167Z"
                            style={{
                                fill: "#0c0824",
                            }}
                        />
                        <path
                            d="M3.167 3.517h25.666v24.966H3.167ZM2 29.65h28V2.35H2Zm18.877-16.1c-.922 0-1.237.467-1.237.852 0 .42.21.712 1.447 1.353 1.832.887 2.4 1.738 2.4 2.987 0 1.867-1.423 2.87-3.348 2.87a5.076 5.076 0 0 1-2.392-.5c-.082-.035-.093-.093-.093-.187v-1.717c0-.117.058-.152.14-.093a4.33 4.33 0 0 0 2.345.688c.922 0 1.307-.385 1.307-.91 0-.42-.268-.793-1.447-1.4-1.657-.793-2.345-1.6-2.345-2.94 0-1.505 1.178-2.753 3.22-2.753a5.365 5.365 0 0 1 2.088.327.258.258 0 0 1 .117.233v1.6c0 .093-.058.152-.175.117a3.941 3.941 0 0 0-2.03-.525Zm-10.034 1.388c.268.023.478.023.945.023 1.365 0 2.648-.478 2.648-2.333 0-1.482-.922-2.228-2.473-2.228-.467 0-.91.023-1.12.035Zm-2.077-6.2c0-.082.163-.14.257-.14a69.782 69.782 0 0 1 3.01-.058c3.232 0 4.492 1.773 4.492 4.037 0 2.963-2.147 4.235-4.783 4.235-.443 0-.595-.023-.91-.023v4.48c0 .093-.035.14-.14.14H8.907c-.093 0-.14-.035-.14-.14V8.743Z"
                            style={{
                                fill: "#31c5f0",
                            }}
                        />
                    </svg>
                    <text x="0" y="30"
                        style={{
                            fontFamily: "Verdana",
                            fontWeight: 'bold',
                            fontSize: "4.5",
                            fill: "#31c5f0",
                        }}
                    >PHOTOSHOP</text>
                </svg>
                    ;
            case 'coreldraw':
                return <svg {...props} x="0px" y="0px" viewBox="0 0 2500 2283.8" >
                    <style>
                        {
                            ".st0{fill:#979797}.st1{fill:#61a706}.st3{fillRule:evenodd;clipRule:evenodd;fill:#979797}"
                        }
                    </style>
                    <path
                        className="st0"
                        d="m184.2 1923.4 32.5 10.4c-6.8 33.7-19 59.4-36.7 77.1-17.6 17.7-39.2 26.6-64.7 26.6-26.4 0-47.8-6.8-64.4-20.5-16.6-13.6-29.1-33.3-37.7-59.1-8.6-25.9-13-53.6-13-83.2 0-32.3 4.9-60.5 14.6-84.6 9.8-24.1 23.6-42.4 41.6-54.9s37.8-18.7 59.4-18.7c24.5
                                 0 45.2 7.9 61.8 23.7 16.7 15.8 28.4 38 34.9 66.6l-31.9 9.5c-5.7-22.5-13.9-39-24.7-49.3-10.8-10.3-24.4-15.5-40.8-15.5-18.8 0-34.5 5.7-47.2 17.1-12.6 11.4-21.5 26.8-26.6 46-5.1 19.3-7.7 39.2-7.7 59.6
                                 0 26.4 3 49.4 9.1 69.1 6.1 19.7 15.5 34.4 28.3 44.2 12.8 9.8 26.6 14.6 41.5 14.6 18.2
                                 0 33.5-6.7 46-19.9 12.7-13 21.2-32.6 25.7-58.8zM241.8 1919.8c0-41.6 9.1-72.3 27.5-92.4 15.2-16.6 33.9-24.9 55.9-24.9 24.4
                                 0 44.4 10.1 59.9 30.4 15.5 20.2 23.2 48.1 23.2 83.8
                                 0 28.9-3.4 51.6-10.3 68.2-6.8 16.5-16.8 29.4-30 38.6-13.1 9.2-27.4 13.7-42.9 13.7-24.9 0-45-10-60.3-30.2-15.4-20.3-23-49.3-23-87.2zm30.8.1c0 28.8 5 50.3 14.9 64.5 10 14.3 22.5 21.5 37.6 21.5 15
                                 0 27.4-7.2 37.4-21.5 9.9-14.4 14.9-36.3 14.9-65.7 0-27.8-5-48.8-15-63-10-14.3-22.4-21.5-37.3-21.5-15.1 0-27.6 7.1-37.6 21.3-10 14.2-14.9 35.7-14.9 64.4zM443.2 2032.3v-225.1h27.1v34.5c6.9-16 13.3-26.5 19.2-31.6 5.9-5.1 12.3-7.7 19.4-7.7 10.2
                                 0 20.5 4 31 12.1l-10.7 35.2c-7.3-5.2-14.6-7.8-21.9-7.8-6.6 0-12.4 2.5-17.6 7.5-5.2 5-8.9 11.9-11.1 20.8-3.4 13.5-5 28.3-5 44.4v117.6h-30.4v.1zM678.9 1959.5l31.2 5.2c-4.9 22.9-13.9 40.8-27.2 53.4-13.2 12.6-30.1 19-50.8 19-25.9 0-46.5-10.1-61.7-30.4-15.2-20.2-22.8-48.6-22.8-85.1 0-37.7 7.7-67.1 23-87.9 15.4-20.9 35.3-31.3 59.8-31.3 23.7
                                 0 43 10.2 58.1 30.6 15 20.5 22.5 49.2 22.5 86.3
                                 0 2.2-.1 5.6-.2 10.1H578.5c1.1 24.6 6.6 43.6 16.6 56.7 9.9 13.1 22.3 19.7 37.1 19.7 11
                                 0 20.4-3.7 28.2-11.1 7.7-7.2 13.9-19 18.5-35.2zm-98.7-61.2h99c-1.3-18.9-5.1-33.1-11.4-42.6-9.5-14.7-22-22-37.2-22-13.8 0-25.4 5.9-34.8 17.6-9.3 11.7-14.5 27.4-15.6 47zM747.4 2032.3v-310.4h30.2v310.4h-30.2zM921.8 1721.9h90.3c20.4
                                 0 35.9 2 46.6 5.9 14.3 5.3 26.7 14.9 36.9 28.6 10.3 13.7 18 30.4 23.4 50.3 5.3 19.8 8 44.3 8 73.4
                                 0 25.6-2.5 47.6-7.5 66.1-6.1 22.6-14.8 40.9-26.2 54.9-8.6 10.6-20.2 18.9-34.7 24.8-10.9 4.4-25.5 6.6-43.7 6.6h-93v-310.6h-.1zm49.7 52.4v205.5h36.8c13.8
                                 0 23.7-1 29.8-3 8-2.5 14.7-6.9 19.9-12.9 5.3-6.1 9.6-16 12.9-29.9 3.4-13.9 5-32.9 5-56.9s-1.7-42.3-5-55.2c-3.3-12.9-8-22.8-14-30.1-6-7.2-13.6-12.1-22.8-14.6-6.9-1.9-20.4-3-40.5-3h-22.1v.1zM1169.2 2032.3v-310.5h104.3c26.2
                                 0 45.3 2.8 57.1 8.4 11.9 5.6 21.4 15.5 28.5 29.7 7.1 14.3 10.7 30.6 10.7 48.9
                                 0 23.3-5.4 42.6-16.2 57.7-10.8 15.2-26.9 24.7-48.4 28.7 10.7 7.9 19.5 16.5 26.4 26 7 9.5 16.3 26.3 28.1 50.4l29.9 60.6h-59.2l-35.5-67.8c-12.7-24.1-21.5-39.2-26.2-45.5-4.7-6.2-9.7-10.6-14.9-12.9-5.3-2.3-13.6-3.5-25.1-3.5h-10.1v129.7h-49.4v.1zm49.6-179.1h36.7c23.7
                                 0 38.5-1.3 44.5-3.8 5.9-2.5 10.6-6.9 13.9-13.2 3.4-6.2 5-14 5-23.3 0-10.5-2.2-18.9-6.6-25.4-4.4-6.4-10.6-10.5-18.6-12.1-4.1-.7-16.1-1.1-36.1-1.1h-38.7v78.9h-.1zM1637.5 2032.3H1584l-21.2-70.7h-98.4l-20.4 70.7h-52.5l95.2-310.5h52.5l98.3 310.5zm-90.8-123.1-34.1-114.9-33.1 114.9h67.2zM1678.7 2032.3l-57.7-310.4h51.1l36.4 213.2 44.8-213.2h59l42.8 216.8 37.4-216.8h49.8l-59.1 310.4h-53l-48.4-232.1-48.7 232.1h-54.4zM882.4 2176.7V2158H932v59.2c-7.6 8.3-15.5 14.5-23.6 18.7-8.1 4.2-16.4 6.2-24.9 6.2-11.5 0-22-3.3-31.4-10.1-9.4-6.7-16.5-16.4-21.3-29.1-4.8-12.7-7.2-26.9-7.2-42.6 0-15.5 2.4-30 7.1-43.5 4.8-13.5 11.6-23.5 20.6-30 8.9-6.5 19.3-9.8 30.9-9.8 8.5
                                 0 16.1 1.9 23 5.6 6.8 3.8 12.2 9 16.1 15.6 3.9 6.7 6.8 15.4 8.9 26.2l-14 5.2c-1.8-8.1-4-14.5-6.5-19.2-2.6-4.6-6.3-8.4-11.2-11.1-4.8-2.8-10.2-4.2-16.1-4.2-7.1 0-13.2 1.5-18.4 4.4-5.2 2.9-9.3 6.8-12.5 11.6-3.2 4.8-5.6 10.1-7.4 15.8-3 9.9-4.5 20.6-4.5 32.2
                                 0 14.3 1.8 26.2 5.4 35.8 3.6 9.6 8.8 16.7 15.7 21.4 6.9 4.6 14.2 7 21.9 7 6.7
                                 0 13.3-1.8 19.6-5.3 6.4-3.6 11.2-7.3 14.5-11.4v-29.9h-34.3zM952.9 2239.4v-115.8h12.9v17.7c3.3-8.2 6.4-13.6 9.2-16.2 2.8-2.6 5.9-3.9 9.2-3.9 4.9
                                 0 9.8 2.1 14.8 6.2l-5.1 18.1c-3.5-2.7-7-4-10.5-4-3.1 0-5.9 1.3-8.4 3.9-2.5 2.6-4.3 6.1-5.3 10.7-1.6 7-2.4 14.6-2.4 22.9v60.5h-14.4v-.1zM1063.1 2224.9c-5.3 6.2-10.5 10.6-15.4 13.1-4.9 2.6-10.2 3.8-15.9 3.8-9.3 0-16.5-3.1-21.5-9.3-5-6.2-7.5-14.1-7.5-23.7 0-5.6 1-10.8 2.8-15.5 1.9-4.7 4.4-8.4 7.4-11.2 3.1-2.8 6.5-5 10.4-6.4 2.8-1 7.1-2 12.8-2.9 11.6-1.9 20.2-4.1 25.7-6.7.1-2.7.1-4.4.1-5.1 0-8-1.4-13.6-4.1-16.8-3.7-4.4-9.2-6.6-16.4-6.6-6.8 0-11.8 1.6-15 4.9-3.2 3.2-5.6 9-7.2 17.2l-14.1-2.7c1.3-8.2 3.4-14.9 6.3-19.9 2.9-5.1 7.2-8.9 12.8-11.7 5.5-2.7 12-4.1 19.3-4.1 7.3
                                 0 13.2 1.2 17.7 3.5s7.9 5.2 10 8.8c2.1 3.5 3.6 8 4.5 13.4.5 3.3.7 9.4.7 18v26c0 18.2.3 29.7.9 34.5.6 4.9 1.8 9.5 3.5 14h-15.1c-1.4-4.2-2.3-9-2.7-14.6zm-1.1-43.5c-5.2 2.9-13.1 5.4-23.6 7.4-5.9 1.2-10.2 2.5-12.6 3.9-2.5 1.4-4.3 3.6-5.7 6.3-1.3 2.8-2 5.9-2 9.3
                                 0 5.2 1.4 9.5 4.4 13 2.9 3.5 7.2 5.2 12.8 5.2 5.5
                                 0 10.5-1.6 14.8-4.9 4.3-3.3 7.5-7.8 9.5-13.5 1.6-4.4 2.3-10.9 2.3-19.5l.1-7.2zM1098.6 2283.8v-160.2h13.1v15.2c3.1-5.9 6.6-10.3 10.5-13.2 3.9-2.9 8.6-4.4 14.1-4.4 7.3
                                 0 13.6 2.5 19.2 7.6 5.5 5.1 9.7 12.2 12.5 21.5 2.8 9.3 4.2 19.4 4.2 30.4
                                 0 11.8-1.6 22.4-4.7 31.9-3.1 9.4-7.6 16.7-13.6 21.7-5.9 5-12.2 7.5-18.7 7.5-4.8 0-9.1-1.4-12.9-4.1-3.8-2.8-6.9-6.2-9.4-10.4v56.5h-14.3zm13.1-101.6c0 14.8 2.2 25.8 6.6 32.9 4.4 7.1 9.8 10.7 16 10.7 6.4
                                 0 11.8-3.7 16.4-11 4.6-7.4 6.8-18.7 6.8-34.2 0-14.7-2.2-25.7-6.7-33-4.4-7.3-9.7-11-15.9-11-6.1 0-11.5 3.9-16.2 11.7-4.6 7.8-7 19.1-7 33.9zM1189.7 2239.4v-159.7h14.4v57.5c6.7-10.7 15.1-16 25.3-16 6.2
                                 0 11.7 1.7 16.3 5.1 4.6 3.4 7.9 8 9.9 14 2 5.9 3 14.6 3 25.9v73.3h-14.4v-73.2c0-9.8-1.6-16.9-4.6-21.4-3.1-4.5-7.5-6.7-13.1-6.7-4.2 0-8.2 1.5-12 4.5-3.7 3-6.4 7.1-8 12.3-1.6 5.1-2.4 12.2-2.4 21.3v63.2h-14.4v-.1zM1280.7 2102v-22.3h14.4v22.3h-14.4zm0 137.4v-115.8h14.4v115.8h-14.4zM1372.6 2197l14.1 2.7c-1.6 13.2-5.5 23.5-11.8 31-6.4 7.5-14.2 11.2-23.4 11.2-11.6 0-20.9-5.2-28-15.5-7.1-10.3-10.6-25.1-10.6-44.4 0-12.5 1.5-23.4 4.6-32.8 3-9.3 7.6-16.4 13.9-21 6.2-4.7 12.9-7 20.2-7 9.2
                                 0 16.8 3.2 22.6 9.5 5.9 6.4 9.6 15.4 11.3 27.1l-13.9 2.9c-1.3-7.8-3.7-13.6-7.1-17.5-3.4-3.9-7.5-5.9-12.3-5.9-7.3 0-13.2 3.5-17.7 10.6s-6.8 18.3-6.8 33.6c0 15.5 2.2 26.8 6.5 33.8 4.4 7 10.1 10.6 17.1 10.6 5.7
                                 0 10.4-2.3 14.2-7.1 3.7-4.7 6.1-12 7.1-21.8zM1393.2 2204.8l14.2-3.1c.8 7.8 3 13.7 6.7 17.9 3.7 4.1 8.8 6.2 15.3 6.2 6.6
                                 0 11.5-1.8 14.8-5.5 3.2-3.6 4.8-8 4.8-12.9 0-4.4-1.4-7.9-4.3-10.4-2-1.8-6.9-3.9-14.7-6.7-10.5-3.6-17.8-6.7-21.9-9.4-4.1-2.7-7.1-6.3-9.2-11-2.1-4.6-3.2-9.8-3.2-15.5 0-5.2.9-9.9 2.6-14.3 1.7-4.4 4.1-8 7.1-10.9 2.2-2.2 5.3-4.1 9.1-5.7 3.9-1.6 8-2.3 12.4-2.3 6.7
                                 0 12.5 1.3 17.5 3.9 5 2.6 8.8 6.2 11.2 10.6 2.4 4.5 4 10.5 4.9 18l-14.1 2.7c-.6-6-2.5-10.7-5.5-14.1-3.1-3.4-7.4-5.1-13-5.1-6.6 0-11.3 1.5-14.1 4.5-2.8 3-4.2 6.5-4.2 10.4
                                 0 2.5.6 4.8 1.7 6.9 1.2 2.1 3 3.8 5.5 5.2 1.4.7 5.6 2.4 12.7 5 10.1 3.7 17.2 6.7 21.3 9.1 4 2.3 7.2 5.8 9.5 10.3 2.3 4.5 3.5 10.1 3.5 16.8
                                 0 6.5-1.4 12.6-4.2 18.4-2.8 5.8-6.8 10.2-12.1 13.4-5.3 3.2-11.3 4.7-17.9 4.7-11 0-19.5-3.1-25.2-9.3-5.9-6.3-9.6-15.5-11.2-27.8zM1523 2188.1l14.6-1.8c.7 8 2.3 14.6 4.8 19.8 2.5 5.1 6.5 9.3 11.8 12.5 5.3 3.2 11.3 4.8 18 4.8 5.9
                                 0 11.1-1.2 15.7-3.6 4.5-2.4 7.9-5.7 10.1-9.9 2.2-4.2 3.3-8.8 3.3-13.7 0-5-1.1-9.3-3.2-13.1-2.1-3.7-5.6-6.8-10.6-9.4-3.1-1.6-10.1-4.2-20.9-7.8-10.8-3.5-18.3-6.8-22.6-10-5.6-4-9.7-9-12.5-14.9-2.8-5.9-4.1-12.6-4.1-19.9 0-8.1 1.7-15.6 5-22.6 3.4-7 8.2-12.3 14.7-16 6.4-3.6 13.6-5.5 21.5-5.5 8.7
                                 0 16.3 1.9 23 5.7 6.6 3.8 11.7 9.4 15.3 16.8 3.6 7.4 5.5 15.8 5.8 25.2l-14.9 1.6c-.8-10.1-3.5-17.7-8.1-22.8-4.6-5.2-11.4-7.7-20.4-7.7-9.4 0-16.2 2.3-20.5 7-4.3 4.7-6.4 10.3-6.4 17
                                 0 5.7 1.5 10.4 4.6 14.2 3 3.7 10.8 7.5 23.4 11.4 12.6 3.9 21.3 7.3 25.9 10.2 6.8 4.3 11.8 9.7 15.1 16.2 3.2 6.5 4.9 14.1 4.9 22.6
                                 0 8.5-1.8 16.5-5.3 24-3.6 7.5-8.7 13.3-15.4 17.5-6.7 4.2-14.2 6.2-22.6 6.2-10.6 0-19.5-2.1-26.6-6.3-7.2-4.2-12.8-10.5-16.8-19-4.3-8.5-6.4-18-6.6-28.7zM1690.9 2239.4v-17.2c-6.6 13.1-15.6 19.7-26.9 19.7-5 0-9.7-1.3-14-3.9-4.3-2.6-7.6-5.9-9.7-9.8-2.1-4-3.6-8.8-4.4-14.5-.6-3.9-.9-10-.9-18.3v-71.6h14.4v64.1c0 10.2.3 17.1.9 20.7.9 5.2 2.8 9.2 5.8 12.1 2.9 2.9 6.5 4.4 10.8 4.4 4.3
                                 0 8.3-1.5 12.1-4.5 3.8-3 6.4-7.1 8-12.3 1.6-5.2 2.3-12.7 2.3-22.6v-61.9h14.4v115.8h-12.8v-.2zM1726.5 2102v-22.3h14.4v22.3h-14.4zm0 137.4v-115.8h14.4v115.8h-14.4zM1818.3 2239.4v-17.2c-6.6 13.1-15.6 19.7-26.9 19.7-5 0-9.7-1.3-14-3.9-4.3-2.6-7.6-5.9-9.7-9.8-2.1-4-3.6-8.8-4.4-14.5-.6-3.9-.9-10-.9-18.3v-71.6h14.4v64.1c0 10.2.3 17.1.9 20.7.9 5.2 2.8 9.2 5.8 12.1 2.9 2.9 6.5 4.4 10.8 4.4 4.3
                                 0 8.3-1.5 12.1-4.5 3.8-3 6.4-7.1 8-12.3 1.6-5.2 2.3-12.7 2.3-22.6v-61.9h14.4v115.8h-12.8v-.2zM1885.2 2221.9l2 17.3c-4 1.2-7.7 1.7-10.8 1.7-5.2 0-9.2-1.1-12.1-3.4-2.9-2.3-4.9-5.2-6.1-8.9-1.2-3.7-1.7-11.4-1.7-23.2v-66.7h-10.6v-15.2h10.6V2095l14.4-11.8v40.4h14.4v15.2h-14.4v67.8c0 5.6.2 9.2.8 10.8.5 1.6 1.3 2.9 2.5 3.8 1.1.9 2.8 1.4 4.9 1.4 1.4.1 3.5-.2 6.1-.7zM1957.3 2201.9l14.9 2.7c-2.3 11.8-6.7 21-13 27.5s-14.4 9.8-24.3 9.8c-12.4 0-22.2-5.2-29.5-15.6-7.3-10.4-10.9-25-10.9-43.8 0-19.4 3.7-34.5 11-45.2 7.3-10.7 16.9-16.1 28.6-16.1 11.3
                                 0 20.6 5.2 27.7 15.8 7.2 10.5 10.8 25.3 10.8 44.4
                                 0 1.2 0 2.9-.1 5.2h-63.3c.5 12.7 3.2 22.4 7.9 29.1 4.7 6.7 10.6 10.1 17.7 10.1 5.3 0 9.8-1.9 13.5-5.7 3.9-3.8 6.8-9.8 9-18.2zm-47.1-31.4h47.3c-.6-9.7-2.5-17-5.4-21.9-4.6-7.5-10.5-11.3-17.8-11.3-6.6 0-12.1 3-16.6 9-4.6 6-7 14.1-7.5 24.2z"
                    />
                    <path
                        className="st1"
                        d="m2048.4 2237 95.2-143.8-88.2-133.8h54.3l41.2 65.5c7.6 12.3 13.6 22.3 17.9 30.1 7.5-11.1 14.1-21.2 20-30.2l43.4-65.4h54l-88.7 133.8L2292 2237h-53.7l-53.9-85.6-12.3-20.6-69.7 106.2h-54zM2367 2072.9c-14.5-5.6-25.2-13.7-32.2-24.2-6.9-10.5-10.5-23-10.5-37.6 0-22.1 7.4-40.5 22.2-55.5 14.9-15 34.6-22.5 59.3-22.5 24.7 0 44.7 7.7 59.8 23 15.1 15.4 22.6 34 22.6 56.1 0 14-3.4 26.3-10.3 36.6-6.9 10.4-17.3 18.5-31.4 24.1 17.4 6.1 30.6 15.8 39.6 29.3 9.1 13.5 13.6 29.5 13.6 48.3 0 25.9-8.6 47.6-25.7 65.2-17.2 17.6-39.8 26.4-67.8 26.4s-50.5-8.8-67.8-26.5c-17.1-17.7-25.7-39.7-25.7-66.2 0-19.7 4.7-36.1 14.1-49.4 9.5-13.3 22.9-22.3 40.2-27.1zm-6.9-63.1c0 14.4 4.3 26.1 12.8 35.2 8.6 9.1 19.9 13.7 33.8 13.7 13.6 0 24.5-4.5 33.1-13.5 8.5-9 12.8-20.1 12.8-33.2 0-13.7-4.4-25.1-13.2-34.5-8.7-9.3-19.8-13.9-33.1-13.9-13.4 0-24.5 4.6-33.2 13.7-8.7 9-13 19.8-13 32.5zm-11.6 139.9c0 10.6 2.3 20.9 6.9 30.8 4.6 9.9 11.6 17.5 21 23 9.3 5.4 19.4 8.2 30 8.2 16.8 0 30.6-5.7 41.4-17.1s16.1-25.9 16.1-43.5c0-17.9-5.6-32.7-16.6-44.4-11.1-11.7-25.1-17.5-42-17.5-16.5 0-30.1 5.8-40.8 17.3-10.6 11.4-16 25.9-16 43.2z"
                    />
                    <path
                        style={{
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            fill: "#61a706",
                        }}
                        d="m1110.3 1369.1 32.9 131.6h158l30.7-133.8-221.6 2.2z"
                    />
                    <path
                        className="st3"
                        d="m1192.7 1276 6 18.6 3.8 8.3 38.1.2 4.5-2.2 5.5-13c23.5-60.5 85.2-318.7 98-384.6 34.8-178.8 60.9-361 48.2-543.6-4.8-69-17.8-146.1-43.6-210.6-19.7-49.5-49.3-106.2-101.4-128.2C1195.2-3 1140.6 55 1116.2 102c-129.5 249.5-46.8 679.8 13.7 934.9l20.4 87.5c13.4 50.7 28.6 95.7 42.4 151.6z"
                    />
                    <path
                        className="st3"
                        d="m1176.5 1288.6-22.5-18.5c-268.8-252.4-637.4-1101-56.4-1257.5 23.7-6.4 18.8-4.9 41.7-6-456.5 196.7-148.5 963.6 37.2 1282zM1273.7 1288.6l22.5-18.5c268.8-252.4 637.4-1101 56.4-1257.5-23.7-6.4-18.8-4.9-41.7-6 456.5 196.7 148.6 963.6-37.2 1282z"
                    />
                    <path
                        className="st3"
                        d="M910.1 74c-114.3 53.2-202.1 168.7-221 294l-4.4 53.2.5 42.8 6 47.2 3.3 22.5c45 247.7 250.8 572.4 431.9 744.5C876 944.1 498.1 415.6 910.1 74zM1540.1 74c114.3 53.2 202.1 168.7 221 294l4.4 53.2-.6 42.8-6 47.2-3.3 22.5c-45 247.7-250.8 572.4-431.9 744.5C1574.2 944.1 1952.1 415.6 1540.1 74z"
                    />
                </svg>
                    ;
            case 'autocad':
                return <>

                </>
                    ;



            case 'cccc':
                return <g>
                </g>
                    ;
            case 'ddddd':
                return <g>
                </g>
                    ;
            case 'eeeee':
                return <g>
                </g>
                    ;


            default:
                return 'No icono';
        }
    }

    return (
        <>
            {tipoIcono(props.titulo)}
        </>

    );
}