import bpy

## selecting and activating desired object
def select_activate(object):
    # selecting the area of working
    #bpy.context.area.type = "VIEW_3D"
    # selecting the object
    bpy.data.objects[object].select_set(True)
    # activating the object
    bpy.context.view_layer.objects.active = bpy.data.objects['dress_BubblyDress.001']

## rendering and selecting object
def render(path):
    bpy.context.scene.render.filepath = path
    bpy.ops.render.render(write_still = True)

## paths of all image
PathOfImage1 = r'C:\Users\PRATIK\Desktop\NodeJS\frock4.png'

## selecting and positioning camera
select_activate('dress_BubblyDress.001')
render(PathOfImage1)