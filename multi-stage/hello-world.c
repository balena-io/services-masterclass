#include <stdio.h>
#include <unistd.h>
#include <limits.h>

/* Greet the world, then sleep forever (well, for a long time). */
void main(void) {
    printf("Hello, world!\n");
    sleep(UINT_MAX);
}
