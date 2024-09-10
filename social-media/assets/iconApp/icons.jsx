const icons = {
    logo: '',
    like: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADaUlEQVR4nO2cS4iOURjHf4ahXFIkskDJLaPUMFFoWLBAYpLCBrHARglpGoWFJpcmG8xGKVGKsLARTeRSlFigzCjKfTDuY3h06ihJwze+c87zvt/zq/92Tv//vHPmPOc554BhGIZhGIZhGIZhGIZhGIYRkYHAUuAgcAV4BnwBOoBWoAW4ABwCVgMV/zleH6AGaAAuA4+BT0A78Aq4DZwEaoGZQA8yzmzgtDcoBeohsBcYXcB41cAx4GOBY7nwDwATyRizgJtdCPdP+g6cA+YD3Tr5hV4t0nhngQkoZ4D/oiSQLgOVv4w3CWgKMM5XYCfQE4VM9XOhBNY3P5c3+Dk+5FiXgCEoYon/ZyM5VAswHAUsi/BlSWI1A4NThjzPz2dSAmoCylOEPAp4rSAAiahtsUN2C/wbCoxLZH0GxsYMerMC05JIbvkahUHAewWGJZHc8nJMjKDrFZiVxNoVOuS+wDsFRiWxHnWyHVAUVigwKUo0PmTQ5xUYFCVaFyrk3n55k9qgKFFjqKDnKDAninQxVNC1CsyJIrnGRBCOKDAniuS6MkG4psCcKJLreQahWYE5USTXBw3CcwXmRJHczmUQPigwJ8qqwyC0KTAniuS67kF4osCcKNLxUEGX4ka/dKIdoYI+ocCcKNKCUEFvVWBOFGloqKCrFZgTJbpDQMp92ZnapCjQbgJzQIFJUaApoYMe7ZuTUsK6H7qN9ZNTCsxKQm0kElUl/FW3Af2JyH4FpiWB3FGLqLg7Ig8UGJeIeuPv4kSnuot3UySj2kJCVioIQCLoHtCLxOxTEIQElDtkPx0FlAGHFQQigVSHIrrltGq8AHRHGWU5C/upthtZv7MpBwXNR2AaGWBhhpu5HcAiMkRVBvuM7jr0KjLICL9JnpWQN5Bh+gFnMjBdrCEHdPf3PkSh3JnvxeSMtcpu2rb6PZtcMrcLD5eE0C1gJDlnBvA2YchH/VZvSTAZeBk5YPeXtJ4SpCJi2Ndj3+PW+HLNh8An8+vy8BJYMajxBUOI3bdxqc1po76IAbvSf3ms8xdZo0cRnnBzry5s99Wo0QmVXSxo2v0rkcFOeOaRQwUG3Og3r4wCGe5XCn8rnd2cPqzQH278W2f9rt8vKZmqLjQ9gT2+mHnhr0fP8n1JwzAMwzAMwzAMwzAMgzT8ADivUW/DjHbGAAAAAElFTkSuQmCC",
    add_icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAc0lEQVR4nO2UMQqAMAxF3/Gsg3j/wULVQS8Rl05FpGATpeTBX/MgCR+cnzMDJ3AAk6V4ByRnsxRLERerIb5qK6SbVY9AvBn8NhEIT+KkIK1quPSVOACLgnQBBhrQz1fX4mIzxG9sRSzKwYwArDlNGslBiwtYs6fhOILl9QAAAABJRU5ErkJggg==",
    mess_icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD1ElEQVR4nO2bW4hOURTHfzOGKbeR3MIYRqY8KIUHuYfx4BLxIJchSh7GJZ7IwyQKRZRLyZ1R7qIRcstMPAhhxoPbIJfhSXKJxox2bTWO833n7H32+WbN+P71r69Oe531398+e6+z1jqQRhpppAh9gKnAcmArsBs4rql+b9bXJgH5NAN0BOYCJ4AaoN6Q7/XkKBsdaEIYrUX/tBCdiD+0zREIxnjgjkPRiajuMQ5ByAcup0C4lxeBvo0pPANYCnxpBPF/qO5drH1JKdrqZ7JeCM8DOakSnwc8FiDay0dAbirO8hcCxCbiyzhjiDzgrQCRQXwF9HAtvj3wQIC4sLwHtHYlPgMoEyDKlIddTcBSAWJsqY7ISCgAvgsQYsvPUfeDCwJERKV6obLCRAHOu2KhzQTcEuC4K94wFT9GgNOuOchkAo4LcNg1S8OK79DEd/5kSZV2YSZgngBn4+L0MBNQKsDRIKoVegZ4Yjhuf5gJqBEgMBmfA/20ry0NY5UPQeJ7CRCYjFVAd4/PswxteMf/hUkCRCbiXaAT/2KroZ2xJMHKGByvBs4CB3Ui85OFjfIEKS+1Yde6fEHa6FD4JWCIzz2ygJnAMwM7bXzsKCF1Fn6pClRC7HcgXDm1OkSmNidEnkHt9Nk+Y1dF8G9nnEdgHbCE8GgBHE1g66je5b0oiejjnrgm4BewyMdmJjASmAP097muRG7R4/9EbCV6nNfODgcr9EiyCTgQQfwCH3vdgJueFbJN//NedAGG6qKq375xyIF4xb2uN8FaYL6Pra763PYbc0yLCoNWjoswa5PdbIWFeLW0vegZIkw9F+LlRK2Kaw7FKy52GQht87GRa3DEqULGQp8zXj0Gy2IKyye7DIVn+xRPnls4pXoJKnXmpsoiuDGhWp1J8cHAWFmDZ7lAR331gqnKeoEoNTSqCqWngW8CBAZRheOBKBLgaFz0O63+gdqQvgpwNo5mClXjpLlkheoNuQ8DjBLgsGsOwxDlApx2xdtYoFCA46443GYCMoGPApyPylNEwEMBAqLwa4MMsjHaNIMKkXrPsEaRAAFRqF65I+GqABG2rDQJevyQ1yBF1dT4NKj4EQZrBAixYbWrbtEKAWJMeV+vXCd4LUCQaabXWWNkU+oP+mJYhwiNYgHigngyzu7wLOB6gANvdJlpCjBAZ4evpEB4hW3bmymygU2eaq7qyV+vi56Jan8DdRHDZYrsh+79HUwjIEtnUkM1GHlC6Wm62vTOQvQ7XcWZkcqvQeJEZ/21l8r3rwO2639V7eC7gA26MXsC0LsxvgNKIw3+P/wGaB+1Upm+u38AAAAASUVORK5CYII=",
    comment: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAjElEQVR4nN2VwQnDMBAEpwU/8sxb1aTAtGAM6sq/BKIG1thcwBjHGHSnkAzsR4gdIcEJ/oUrMAAFUGUKkIG0Ln84FGuTp3UvJ1dQepyuRR/yYmexFm37mgvkHJoLatHXBfr5N9DR5hO0F5ToK8rRgmSjNUyAze3epl+IwIsOuEcKMG7AGCmYubx/tFAm1BJYoQ7xecIAAAAASUVORK5CYII=",
    edit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2klEQVR4nO2WMQoCMRBF3yn0IBaeTC2dchHvYeGJBHvRCwiijM0uiJjsrmIyA/NgqiTw/oeEQBAElpgDe+AC3IAjsAWmOGAJPAD9MOc2nFkkIf4eYoJTeW1ng/MAB4wiAwNcMYwMCHDCiKhk1jQzu8KuWcGxIe7ArLBvr5iM2Lso7Nsr1E2TOLN62bPG+OWUzNnUmrk3vsEYY+TVWohv5NVKiF/k1cOFDfl/EM3XIpqvRTRfC4l3vhISzVdCovmKqNdfZYdrebzL410e7/J4l8e7PN7lgyAIKMITFyDlubA2iZEAAAAASUVORK5CYII=",
    back: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAByUlEQVR4nO3dP2tUQRhG8cc/nyOFxVoK7xu4+cwarCzs/Dam0iyIJGARWXJtZEN2ETMnO+cHU23zwmFmbjNsIkmSdMJejB5A986SXCbZJrlJ8jnJu/U3PbElyfckd3+tH0YZE2O7J8aftdspgsS4W48v7xVIjN36+RTDzG45MMZufRw97KlbjohxneTN6IFPWT/wNbVvbdd4+k+MAdLuDI42Bkcbg6ONwdHG4GhjcLQxONoYHG0MjjYGRxuDo43B0cbgaGNwtDE42hgcbQyONgZHG4OjjcHRxuBoY3C0MTjaGBxtDA5jgBgDxBggxgAxBogxQIwB8nZ9HubLJYgPxmC58k0fy9cDg1yMHnQW7z2yWDZe6jyV5NsRO+Vi9MAzMAqQUYCMAmQUIKMAGQWo/CTmKaPwlFF4yig8ZRSeMgpPGYWnjMJTRuEpo/CUUXjKKDxlFJ4yCk8ZhaeMwlNG4Smj8JRReMooPGUUnjIKTxmFp4zCU0bhKaPwlFGe/1+vbkYPPIPliCifRg87izrw+LpN8mr0sLOoA6L8SvJ69KAzWR45vr6MHnDWKNd7YtwkOR893Kw26wV+ux5Tu51hDICXXuKSJCn/4jfKV7LISpHzvgAAAABJRU5ErkJggg==",
};

export default icons;
